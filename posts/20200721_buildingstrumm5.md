---
title: "Building Strumm: Failure to Launch"
slug: "building-strumm-failure-to-launch"
description: "I launched Strumm right at the beginning of shelter-in-place.  Horrible time to launch, but a great time to learn what went wrong with my first launch."
date: 2020-07-21
---

## Perfect Timing (lol jk)
I _finally_ was in a comfortable enough place to launch [Strumm](https://www.strumm.co) at the beginning of "shelter in place".  It was a horrible time to launch, but a great time to learn what went wrong with my first launch.

## What Went Wrong
### Scalability
I was over complicating things from the start.  I was using Google Maps API for autocomplete and a physical map. Instructor data was from a one time pull of scraping Yelp for each market.  I scraped ~4 different markets (Chicago, NYC, LA, and Austin) and had 100-200 instructors for each market.  I stored the instructors on my Airable base and would use the Airtable API to show results when a user searched for the _exact_ market.   I'd then have to reuse the Google Maps API to place pins on the map for each instructor.  

**Why was this inefficient?**  If a user searched for 'Evanston, IL' – a city just north of Chicago – Strumm would show 0 results even though I had a few instructors located there but mapped to the 'Chicago, IL' market.

#### Solution
Google.  As always.

I ended up using Google Maps API exclusively for autocomplete, mapping, **AND** searching for instructors.  This gives me massive scale, as now I technically can show instructor data anywhere in the US.  The one larger downside of this is that Google Maps only returns 20 results at a time.  A minor inconvenience, but well worth it.

### Server-Side Rendering
Google.  SEO.  UGH.

I thought I solved this problem with my fancy Server-Side Rendering function in my [last post about Strumm](/blog/building-strumm-updates-from-4-months-in).  While this worked in a few instances, it was not rendering the metadata properly.  This made [Strumm](https://www.strumm.co) essentially non-existent to Google.  With what should be a highly SEO friendly site (i.e. "Guitar lessons in Kansas City"), this was a major flaw. 

So I started over.

Again.

From the ground up.

## What Next
My buddy Keeg recommended starting all over using [Nuxt](https://www.nuxtjs.org), a Vue framework.  When you build the file in Nuxt, it should take care of most of the SSR and metadata.  **He also is taking on a much more active role in development.**  If this ends up being indexable on Google, we've discussed setting up a proper corp and determining an equity distribution.  If he wants to take over most of the dev work and allow me to focus on the business side, I would not mind one bit.

I want to:
-  Create a 'Verified' Strumm Instructor tag.  For these instructors, we'd have our on DB with their data and allow for much more customization, such as including an introductory video, verifying their information, have more prominent listing, etc.
-  Allow for direct outreach for Verified Strumm Instructors.  Alternatively, have instructors post their availability and allow students to book directly.
-  Integrate Stripe to allow us to bill students directly – offering an additional service for instructors rather than just bringing in new students.  This could be an additional line of revenue (Strumm keeps X% of revenue or take a $Y one-time fee for a new student).
-  Offer the first lesson free if students book a Verified Strumm Instructor.

Stay tuned over the next few weeks/months for more updates.  The blessing of shelter-in-place is this "failure" didn't really matter because no one should be leaving their houses anyway.

Wear a mask.  Save lives. 

-James