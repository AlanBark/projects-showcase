---
title: ProxKit - Print and Cut PDF Generator for Tabletop Gaming
date: "9 January 2026"
category: [ "Showcase" ]
thumbnail: "/proxkit.png"
description: "A web app that turns card images into perfectly aligned print-and-cut files for Silhouette machines. Because nobody wants to cut 200 proxy cards by hand."
---

So you've got a bunch of card images—maybe you designed them yourself, maybe you exported them from MPCFill—and now you need to actually print and cut them. If you're doing it by hand with a craft knife and ruler, godspeed. That's hours of your life you're not getting back.

For anyone in the proxy community, using Silhouette branded cutters isn't new, but I wanted to make a portable, easy to use solution that I could point my friends to to help them get started.

![proxkit](/proxkit2.png)

Site: <a href="https://proxycut.parkes.dev" target="_blank" rel="noreferrer">proxycut.parkes.dev</a>

Repo: <a href="https://github.com/AlanBark/ProxKit" target="_blank" rel="noreferrer">https://github.com/AlanBark/ProxKit</a>

# What it actually does

Upload some card images. Set your card size and how much bleed you want. Download a PDF. The PDF has registration marks in the right spots and cut lines around each card. Import it into Silhouette Studio and it just works.

**MPCFill XML import** - Got an XML export from MPCFill? ProxKit parses it and downloads all the images for you. Works with shared card backs or unique backs per card.

**Bleed settings** - Set a global bleed or tweak individual cards. The thumbnail preview shows you exactly what's getting trimmed, so there's no guesswork.

**Double-sided printing** - Turn on card backs and you get two PDFs—one for fronts, one for backs. Print the front sheet, flip it, print the back sheet. The alignment actually works because the back layout is mirrored correctly.

**Multiple Paper Sizes** - Pick your paper size. Registration marks go where they need to go for Silhouette Studio to detect them.

# How it's built

React, TypeScript, Vite. jsPDF for generating PDFs, pdf-lib for manipulating them.

# Why this exists

I mainly made this for myself and some friends. The amazing work done by Alan Cha (<a href="https://github.com/Alan-Cha/silhouette-card-maker" target="_blank" rel="noreferrer">https://github.com/Alan-Cha/silhouette-card-maker</a>) inspired this project. I aimed for similar functionality, but with a bit more focus on portability and accessibility.

![Final output preview](/proxkit3.png)

# Give it a shot

It's open source and free. If you're prototyping a game, printing custom cards for an existing game, or just want to avoid manually cutting 200 cards, here you go.

<a href="https://proxycut.parkes.dev" target="_blank" rel="noreferrer">proxycut.parkes.dev</a>

I'll be continuing work on this in the background, as its a dear project to me. In the near future there will be a desktop app with more quality of life functionality.
