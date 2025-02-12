#!/usr/bin/perl
# --
# bin/otrs.PrepareHTMLDocumentation.pl - create new translation file
# Copyright (C) 2001-2014 OTRS AG, http://otrs.com/
# --
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU AFFERO General Public License as published by
# the Free Software Foundation; either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA
# or see http://www.gnu.org/licenses/agpl.txt.
# --

use strict;
use warnings;

use File::Basename;
use FindBin qw($RealBin);
use lib dirname($RealBin);

use File::Find();
use IO::File();

sub PrintUsage {
    print <<"EOF";
otrs.PrepareHTMLDocumentation.pl - update translation files
Copyright (C) 2001-2017 OTRS AG, http://otrs.org/
EOF
}

sub Run {

    PrintUsage();
    my @HTMLFiles = FindHTMLFiles();

    for my $HTMLFile (@HTMLFiles) {
        ProcessHTMLFile(
            File => $HTMLFile
        );
    }
}

# Collect all HTML files to process
sub FindHTMLFiles {
    my @HTMLFiles;

    my $Wanted = sub {
        return if (!-f $File::Find::name);
        return if (substr($File::Find::name, -5) ne '.html');

        # Don't modify the new RST documentations - not compatible.
        return if ($File::Find::name =~ m{/manual/.*/[789]});

        # Don't modify the REST API documentation at this point - not compatible.
        return if ($File::Find::name =~ m{/REST/});

        # Don't modify the frontend documentation at this point - not compatible.
        return if ($File::Find::name =~ m{/frontend/});

        push @HTMLFiles, $File::Find::name;
    };
    File::Find::find($Wanted, $RealBin);

    return @HTMLFiles;
}

sub ProcessHTMLFile {
    my %Param = @_;

    if (!$Param{File}) {
        die "Need File.";
    }

    my $SubPath   = substr($Param{File}, length($RealBin));
    my @Sublevels = split m{/}, $SubPath;
    my $PathToJS  = join('/', map { '..' } (1 .. (@Sublevels - 2)));
    $PathToJS ||= '.';

    my $HTMLContent = ReadFile(File => $Param{File});

    my $FinalContent = $HTMLContent;

    my $HTMLInject =<<"EOF";
<!-- otrs.github.io -->
<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="$PathToJS/documentation.css">
<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="$PathToJS/documentation.js"></script>
<link rel="icon" type="image/png" sizes="32x32" href="$PathToJS/../images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="$PathToJS/../images/favicon-16x16.png">
EOF

    $HTMLInject .=<<'EOF';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
<script>
$(document).ready(function() {

    // Hint languages to prevent false matches (php for example).
    hljs.configure({
        languages: ['perl', 'javascript', 'xml', 'html', 'css', 'json', 'yaml']
    });

    // programlistings in manuals
    $('pre.programlisting').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    // code snippets in Perl API docs
    $('.pod pre').addClass('perl').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});</script>
<!-- otrs.github.io -->
EOF

    if ($FinalContent !~ m{<!--[ ]otrs.github.io[ ]-->}smx) {
        # original file, inject HTML in header
        # remove pre-existing style tags first
        $FinalContent =~ s{<link\s+rel="stylesheet"[^>]+>}{}smxg;
        $FinalContent =~ s{<head>}{<head>\n$HTMLInject}smx;
    }
    else {
        # Already updated file, update injected content
        $FinalContent =~ s{<!--[ ]otrs.github.io[ ]-->.*<!--[ ]otrs.github.io[ ]-->\n}{$HTMLInject}smx;
    }

    return 1 if $FinalContent eq $HTMLContent;

    WriteFile(
        File => $Param{File},
        Content => $FinalContent,
    );

    return 1;
}

sub ReadFile {
    my %Param = @_;

    if (!$Param{File}) {
        die "Need File.";
    }

    my $FileHandle = IO::File->new( $Param{File}, 'r' );
    my @Lines = $FileHandle->getlines();
    return join('', @Lines);
}

sub WriteFile {
    my %Param = @_;

    if (!$Param{File} || !$Param{Content}) {
        die "Need File and Content.";
    }

    my $FileHandle = IO::File->new( $Param{File}, 'w' );
    $FileHandle->print($Param{Content});
}

Run();
