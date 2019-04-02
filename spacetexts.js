


$("#smallest, .earth").click(function(){
  $("#subtitle").html('-Background');
})

$("#medium").click(function(){
  $("#subtitle").html('-------------Take off');
})

$("#large").click(function(){
  $("#subtitle").html('--------------------------Outer space');
})



//////
$("#start").click(function(){
  $(".para1").html(`Select stage`);
  $(".header2").html('');
  $(".para2").html(``);
});

////Stage 1

$("#p1").click(function(){
  $(".header2").html('Pioneer10');
  $(".para1").html(`
  <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://history.nasa.gov/SP-349/ch2.htm', 'popup', 'height=800, width=1600'); return false;">An essay planning</a>
  <br><br>
  <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.space.com/17651-pioneer-10.html', 'popup', 'height=800, width=1600'); return false;">Mission Background</a>
  <br><br>


`);
  // $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});


$("#v1").click(function(){
  $(".para1").html(`
    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.reddit.com/r/space/comments/6nifbp/i_am_frank_drake_creator_of_the_drake_equation/', 'popup', 'height=800, width=1600'); return false;">Frank Drake is answering questions on Reddit</a>
    <br><br>

`);
  $(".header2").html(`Pioneer11`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});


$("#p2").click(function(){
  $(".para1").html(`

    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/', 'popup', 'height=800, width=1600'); return false;">The Golden Record</a>
    <br><br>

    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/making-of-the-golden-record/', 'popup', 'height=800, width=1600'); return false;">Making the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/images/', 'popup', 'height=800, width=1600'); return false;">Images on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/music/', 'popup', 'height=800, width=1600'); return false;">Music on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/sounds/', 'popup', 'height=800, width=1600'); return false;">Sounds on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/greetings/', 'popup', 'height=800, width=1600'); return false;">Sounds on the record</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/', 'popup', 'height=800, width=1600'); return false;">The laughter</a>
    <br><br>

    `);
  $(".header2").html(`Voyager 1`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});



$("#v2").click(function(){
  $(".para1").html(`

    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/', 'popup', 'height=800, width=1600'); return false;">The Golden Record</a>
    <br><br>

    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/making-of-the-golden-record/', 'popup', 'height=800, width=1600'); return false;">Making the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/images/', 'popup', 'height=800, width=1600'); return false;">Images on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/music/', 'popup', 'height=800, width=1600'); return false;">Music on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/sounds/', 'popup', 'height=800, width=1600'); return false;">Sounds on the record</a>
    <br><br>
    <a href="https://soundcloud.com/nasa/sets/golden-record-greetings-to-the" onclick="window.open('https://voyager.jpl.nasa.gov/golden-record/whats-on-the-record/greetings/', 'popup', 'height=800, width=1600'); return false;">Sounds on the record</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/', 'popup', 'height=800, width=1600'); return false;">The laughter</a>
    <br><br>


    `);
  $(".header2").html(`Voyager 2`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});


$("#vd1").click(function(){
  $(".para1").html(`

    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://www.youtube.com/watch?v=EJxwWpaGoJs', 'popup', 'height=800, width=1600'); return false;">Pluto Curiosity</a>
    <br><br>

    `);
  $(".header2").html(`New Horizons`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});




/////stage2




$("#p12").click(function(){
  $(".para1").html(`

    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.youtube.com/watch?v=wupToqz1e2g', 'popup', 'height=800, width=1600'); return false;">Carl Sagan - Pale Blue Dot</a>
    <br><br>
    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.wired.com/2011/06/0613pioneer-10-leaves-inner-solar-system/', 'popup', 'height=800, width=1600'); return false;">Pioneer 10 Achivements</a>
    <br><br>
    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.nasa.gov/centers/ames/news/releases/2003/03_13AR.html', 'popup', 'height=800, width=1600'); return false;">The Last Signal</a>
    <br><br>

    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.space.com/16648-pioneer-anomaly-spacecraft-mystery-solved.html', 'popup', 'height=800, width=1600'); return false;">The Pioneer Anomaly Mystery</a>
    <br><br>
    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.youtube.com/watch?v=pKQG_kYLL0Y', 'popup', 'height=800, width=1600'); return false;">The Jupiter Odyssey</a>
    <br><br>

    `);
  $(".header2").html('Pioneer10');
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#p22").click(function(){
  $(".para1").html(`

    <a href="https://history.nasa.gov/SP-349/ch2.htm/" onclick="window.open('https://www.youtube.com/watch?v=pKQG_kYLL0Y', 'popup', 'height=800, width=1600'); return false;">The Jupiter Odyssey</a>
    <br><br>

      `);
  $(".header2").html(`Pioneer 11`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#v12").click(function(){
  $(".para1").html(`

    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.youtube.com/watch?v=yXjeztNJ5TI', 'popup', 'height=800, width=1600'); return false;">A family portrait of our solarsystem</a>
    <br><br>

    `);
  $(".header2").html(`Voyager 1`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#v22").click(function(){
  $(".para1").html(`

    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.youtube.com/watch?v=seXbrauRTY4&t=231s', 'popup', 'height=800, width=1600'); return false;">The Images we received</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.youtube.com/watch?v=SmIPMhKyiY0', 'popup', 'height=800, width=1600'); return false;">The Launch</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.youtube.com/watch?v=aalfNIvQaJ4', 'popup', 'height=800, width=1600'); return false;">How long can we talk></a>
    <br><br>


        `);
  $(".header2").html(`Voyager 2`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#vd12").click(function(){
  $(".para1").html(`

    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://www.youtube.com/watch?v=6l4kr36TzQ4', 'popup', 'height=800, width=1600'); return false;">Pluto Discoveries</a>
    <br><br>
    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://www.nytimes.com/interactive/2018/12/31/science/new-horizons-ultima-thule-flyby.html', 'popup', 'height=800, width=1600'); return false;">Blob Discoveries</a>
    <br><br>
    <a href="https://voyager.jpl.nasa.gov/golden-record/" onclick="window.open('https://science.nasa.gov/science-news/science-at-nasa/2010/18jun_newhorizons', 'popup', 'height=800, width=1600'); return false;">Exotic Wake-up</a>
    <br><br>

      `);
  $(".header2").html(`New Horizons`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});



////////Stage3


$("#p13").click(function(){
  $(".para1").html(`
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/b4ajq2/wp_pioneer_10_that_traveled_out_of_our_solar/', 'popup', 'height=800, width=1600'); return false;">The Response - The Threat</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/54z5yn/wp_its_been_24000_years_since_the_launch_of/', 'popup', 'height=800, width=1600'); return false;">The Response - Party Aliens</a>
    <br><br>

    `);
  $(".header2").html('Pioneer10');
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#p23").click(function(){
  $(".para1").html(`

    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/2u6r53/wp_in_the_future_in_a_galaxy_far_far_away_aliens/', 'popup', 'height=800, width=1600'); return false;">The Response - Making sense out of it</a>
    <br><br>

    `);
  $(".header2").html(`Pioneer 11`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#v13").click(function(){
  $(".para1").html(`

    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://theoffingmag.com/dead-letter-office/excerpt-from-voyager-ones-private-correspondence-with-carl-sagan/', 'popup', 'height=800, width=1600'); return false;">Dear Carl</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/ap8ceu/wp_the_year_is_3301_and_just_like_every_other_day/', 'popup', 'height=800, width=1600'); return false;">The Response - A New Record></a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/9xlodf/wp_the_year_is_2356_the_scientific_community_is/', 'popup', 'height=800, width=1600'); return false;">The Response - A New Message></a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/9pxlf5/wp_in_1977_nasa_launched_voyager_i_it_contained/', 'popup', 'height=800, width=1600'); return false;">The Response - A New Message></a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/4pmrzl/wp_aliens_find_the_first_voyager_aircraft/', 'popup', 'height=800, width=1600'); return false;">The Creators</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/5wj5f5/wp_an_aggressive_alien_species_intercepts_voyager/', 'popup', 'height=800, width=1600'); return false;">Milky Way Interactions</a>
    <br><br>


    `);
  $(".header2").html(`Voyager 1`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#v23").click(function(){
  $(".para1").html(`
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/5b2dxu/wp_aliens_find_never_gonna_give_you_up_on_voyager/', 'popup', 'height=800, width=1600'); return false;">Rick Rolled</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://phys.org/news/2018-12-australia-voyager-nasa-probe-interstellar.html', 'popup', 'height=800, width=1600'); return false;">Australia listening to Voyager 2</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/asag9h/wp_a_humanoid_race_has_just_detected_the_voyager/', 'popup', 'height=800, width=1600'); return false;">Aliens Entering</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/a51gyn/wp_as_voyager_ii_leaves_the_solar_system/', 'popup', 'height=800, width=1600'); return false;">Playable area</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/7o5a2w/wp_thousands_of_years_after_the_human_race_has/', 'popup', 'height=800, width=1600'); return false;">Remarkable Discoveries</a>
    <br><br>

    `);
  $(".header2").html(`Voyager 2`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});

$("#vd13").click(function(){
  $(".para1").html(`
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/aay9ie/wp_the_last_thing_you_remember_is_falling_asleep/', 'popup', 'height=800, width=1600'); return false;">Wake up</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/abjkv6/wp_the_nasa_probe_new_horizons_survives_a_flyby/', 'popup', 'height=800, width=1600'); return false;">No Ordinary Rock</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/3c7hvk/wp_for_one_hour_and_19_minutes_yesterday_ten_days/', 'popup', 'height=800, width=1600'); return false;">Black Out</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/3ius8r/wp_new_horizons_makes_it_to_the_kuiper_belt_and/', 'popup', 'height=800, width=1600'); return false;">Human Remains</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/3ius8r/wp_new_horizons_makes_it_to_the_kuiper_belt_and/', 'popup', 'height=800, width=1600'); return false;">Human Remains</a>
    <br><br>
    <a href="https://www.theatlantic.com/technology/archive/2017/06/solving-the-mystery-of-whose-laughter-is-on-the-golden-record/532197/" onclick="window.open('https://www.reddit.com/r/WritingPrompts/comments/3cn05a/wpthe_new_horizons_satellite_gets_closer_to_pluto/', 'popup', 'height=800, width=1600'); return false;">Pluto shaped like earth</a>
    <br><br>

      `);
  $(".header2").html(`New Horizons`);
  $(".para2").html(`Launched 1977 <br>Begins extended mission 1980 <br>still in contact`);
});
