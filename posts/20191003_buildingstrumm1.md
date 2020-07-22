---
title: "Building Strumm: My First Vue App"
slug: "building-strumm-my-first-vue-app"
description: "I started with React, but React sucks.  Strumm is my first project that I am coding and it helps people learn guitar by connecting them to local instructors."
date: 2019-10-03
---

## Introduction
I took guitar lessons for years growing up from a local family music shop.  My guitar teacher, Tony, was the son of the owner and is the reason I finally found something to do as I kid that I could stick with.  It has been ~18 years since I started taking lessons.  Unfortunately, when my family moved I wasn’t able to find an instructor that kept me captivated as Tony did. 

As I’ve gotten older, I’ve been wanting to pick up lessons again but have found it very difficult to track down a good instructor.  After a few Google searches it became apparent that there is no central platform for instructors and students to find each other.  So I decided to build one.

## Idea
The idea is pretty simple: a marketplace for music instructors and students.  I imagined a site where I would input my location and my desired instrument and I would get a list of instructors ranked by past students.  There could be filters for the type of music (blues, jazz, classical, and more), for the type of equipment they provide, and the levels of instruction they teach. 

Each instructor would have a profile page that includes rankings, comments, and videos from students showing off what they have learned.  Each instructor would be able to list their availability and students could pay online (probably using Stripe for payment processing) and we could take a small transaction fee to cover costs. 

## Problems I’ll Need to Overcome
1. I am building an app for the first time from the ground up.  I’ve done a few Codecademy courses, half-finished projects myself, and then rebuilt this blog on top of Gatsby, but I have yet to complete something from the ground up. For this, I’ll just figure it out.
2. There is no central place to find enough instructors to build out the supply side.  For this, I am thinking of combining information from Google Maps, Yelp, and a few Google Searches on my end to build out enough data to test it out in Chicago.
3.  My first thought is that there will be a few different APIs I will have to use for this:
	1. Yelps API for local Chicago guitar instructors</li>
	2. Google Maps API for city searches
	3. Google Maps API for a map overlay
	4. Stripe API for payment processing

## Pages to Start
### Home
The home page will be pretty basic.  For V1, it can be super basic lander with a big search bar.  Since this is the first page I will be building, I’ll also get to work on things like the Navbar which will be a component for all the pages.  Only Google can pull a clean white page with a search bar so I will try to find an inviting page in for the background.  Landers like [AirBnb](https://www.airbnb.com/) and  [SofarSounds](https://www.sofarsounds.com/)  will be inspirations for the page.

### Search Results
Here’s where things will get a bit tricky for me.  The inspiration is like [Airbnb’s results page](https://www.airbnb.com/s/Chicago--IL--United-States/homes): results, photos, and information on the left with a map and markers for the instructors on the right.  This is the page where we’ll include the filters I mentioned above, likely as checkboxes. 

The instructors that are listed will include a photo of the instructor or their institution if we can gobble those together, their student rating, and some good old-fashioned dollar signs to indicate their cost in relation to everyone else.

### Instructor Profile
Each instructor on Strumm will have their own profile that they can verify and update with accurate information if they sign up (this will be in an update in the future).  In the meantime, we will gather the information needed from Yelp, Google Maps, and random Google Searches I do to build out enough profiles to make the marketplace usable.  This page will be inspired by [Upwork’s profile page](https://content-static.upwork.com/blog/uploads/sites/3/2019/03/11111602/FL-Profile-Visual.png) , I want this to be pretty basic but the student reviews and videos showing what they have learned provides value—so I will try to focus on this problem.

### Payment
I do not know what I do not know about payments.  Stripe seems like it is the easiest way to accept payments and I am sure that there are a ton of basic payment forms that I can steal with pride from.  Since I do not have any practice with payments, I am 100% open to ideas for this page.  

I want this to be a revenue-generating site so I will be collecting a transaction fee.  Since the instructors likely currently receive payments through cash, Cash App, Venmo, or check, the fee will need to be small enough that they do not try to get students to pay them directly but large enough to pay the bills.  I am thinking a flat $2 transaction fee.

## Watch Me Build It
I’ll post the followup posts below.  Let me know if you’ve done something similar.  I’m hoping that while I build this out, I’ll be able to build a few small posts out which will help other folks trying to teach themselves how to build. 

- [Building Strumm: Setting Up and Making a NavBar](/blog/building-strumm-setting-up-and-making-a-navbar)
- [Building Strumm: Setting Up Google Maps API and Airtable API](/blog/building-strumm-setting-up-google-maps-api-and-airtable-api)
- [Building Strumm: Updates from 4 months in](/blog/building-strumm-updates-from-4-months-in)