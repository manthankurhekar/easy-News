import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

export class News extends Component {
      
      static defaultProps = {
            news_type: 'General'
      };

      static propTypes = {
            news_type: PropTypes.string
      };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      total_articles: 0, 
    };
  }

    async componentDidMount() {

      // this.state.loading = true;
      let url = `https://newsapi.org/v2/everything?q=${this.props.news_type}&apiKey=f7e98ee4b6da47a9b2d6943de7d14c44`;
      let res = await fetch(url);
      let parsedRes = await res.json();
      this.setState({
            total_articles: parsedRes.totalResults
      });


      let url1 = `https://newsapi.org/v2/everything?q=${this.props.news_type}&apiKey=77ea8cab85ee4e56a04a6b4f699f58fd`;
      let res1 = await fetch(url1);
      let parsedRes1 = await res1.json();
      this.state.loading = false;

      this.setState({
            articles: parsedRes1.articles,
      });

    }


  render() {
    

    const trimeTitle = (text) => {
      if (text.length > 32) {
        let finalText = "";
        for (let i = 0; i < text.length && i <= 31; i++) {
          finalText += text[i];
        }
        return finalText + "...";
      } else {
        return text;
      }
    };

    const trimDescription = (text) => {
      if (text.length > 32) {
        let finalText = "";
        for (let i = 0; i < text.length && i <= 31; i++) {
          finalText += text[i];
        }
        return finalText + "...";
      } else {
        return text;
      }
    };

    return (
      <div className="bg-dark">
        <div className="container py-3 my-1">
          <h1 style={{ color: "white", margin: "55px 0px" }} className="text-center"> {`Top ${this.props.news_type} news this week!`} </h1>
          {this.state.loading && <Spinner />}
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-5" key={element.url}>
                  <NewsItem
                    title={element.title === null ? "Billo bagge billeyan da ki karengi? Bagge bagge billeyan da ki karengi" : trimeTitle(element.title)}
                    description={element.description === null ? "Billo bagge billeyan da ki karengi? Bagge bagge billeyan da ki karengi" : trimDescription(element.description)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.title === null ? "null" : element.url}
                    author={element.author === null || element.author.substring(0, 4) === 'http' ? "Great Khali" : element.author}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
          </div>
        </div>
      </div>
    );
  }
}

export default News;


// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem';


// export default function News() {

//       const [articles, setArticles] = useState([
//             {
//               source: { id: "al-jazeera-english", name: "Al Jazeera English" },
//               author: "Al Jazeera",
//               title:
//                 "Deadly truck explosion hits checkpoint in central Somali town - Al Jazeera English",
//               description:
//                 "The blast in the town of Beledweyne comes as Somali government has intensified operation against al-Shabab armed group.",
//               url: "https://www.aljazeera.com/news/2023/9/23/deadly-truck-explosion-hits-checkpoint-in-central-somali-town",
//               urlToImage:
//                 "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23266541638993-1695484072.jpg?resize=1920%2C1393",
//               publishedAt: "2023-09-23T17:48:45Z",
//               content:
//                 "The death toll in a truck bomb explosion in the central Somali town of Beledweyne has risen to 18, a top regional official has said, as the Horn of Africa nation battles armed groups.\r\nAbdirahman Dah… [+2728 chars]",
//             },
//             {
//               source: { id: null, name: "CBS Sports" },
//               author: "",
//               title:
//                 "College football picks, schedule: Predictions against the spread, odds, top 25 games in Week 4 - CBS Sports",
//               description:
//                 "A closer look at the top games for the fourth week of the 2023 college football season",
//               url: "https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-top-25-games-in-week-4/",
//               urlToImage:
//                 "https://sportshub.cbsistatic.com/i/r/2023/09/22/fa46c806-b9d4-4e72-bbaf-ae3fbdd392ba/thumbnail/1200x675/573927827c537c9b2e235401ddf4abbf/ohio-state-notre-dame-2022-g.png",
//               publishedAt: "2023-09-23T17:40:00Z",
//               content:
//                 "Maybe you haven't been real happy with the lack of top 25 matchups so far on the schedule through the first three weeks of the 2023 college football season. Well, you are in luck in Week 4. The most … [+4797 chars]",
//             },
//             {
//               source: { id: null, name: "NBCSports.com" },
//               author: "Myles Simmons",
//               title: "Bengals sign A.J. McCarron to practice squad - NBC Sports",
//               description: "A.J.",
//               url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bengals-sign-a-j-mccarron-to-practice-squad",
//               urlToImage:
//                 "https://nbcsports.brightspotcdn.com/dims4/default/d1d0c21/2147483647/strip/true/crop/5110x2874+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F2c%2Ffd%2F3a88e8b44185b28a24dce4fb7f7c%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1614725067",
//               publishedAt: "2023-09-23T17:26:53Z",
//               content:
//                 "A.J. McCarron is back with the Bengals. \r\nCincinnati has signed McCarron to its practice squad after a tryout on Saturday, according to Ian Rapoport of NFL Media. \r\nThe Bengals drafted McCarron back … [+933 chars]",
//             },
//             {
//               source: { id: null, name: "The Intercept" },
//               author: "Murtaza Hussain",
//               title:
//                 "FBI Warned Sikhs in the U.S. About Death Threats After Killing of Canadian Activist - The Intercept",
//               description:
//                 "The warnings have taken on a new urgency after Canada alleged that India was involved in the assassination of Hardeep Singh Nijjar.",
//               url: "http://theintercept.com/2023/09/23/sikhs-fbi-canada-india-nijjar/",
//               urlToImage:
//                 "https://theintercept.com/wp-content/uploads/2023/09/GettyImages-1248909389.jpg?fit=5636%2C2818&w=1200&h=800",
//               publishedAt: "2023-09-23T17:25:45Z",
//               content:
//                 "After the brazen killing of a high-profile Canadian Sikh activist in June, FBI agents visited several Sikh activists in California this summer with an alarming message: Their lives were also at risk.… [+10334 chars]",
//             },
//             {
//               source: { id: null, name: "Yahoo Entertainment" },
//               author: "Danica Creahan",
//               title:
//                 "2023 NCAA college football season: How to watch the Ohio State vs. Notre Dame game today - Yahoo Sports",
//               description:
//                 "Here's how to watch the Ohio State vs. Notre Dame game today, plus the rest of the Week 4 college football schedule.",
//               url: "https://sports.yahoo.com/watch-ohio-state-notre-dame-game-tonight-ncaa-college-football-2023-schedule-time-channel-140003834.html",
//               urlToImage:
//                 "https://s.yimg.com/ny/api/res/1.2/P7leAZ3547YKSN0BtvaEeA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/dac5c5e0-5654-11ee-a95d-2b1f9128d098",
//               publishedAt: "2023-09-23T17:12:38Z",
//               content:
//                 "NCAA college football is back for the 2023 season, with over 100 games taking place just in Week 4. One of those must-watch games? Tonight's Ohio State at Notre Dame game. Are you ready to watch the … [+6331 chars]",
//             },
//             {
//               source: { id: "associated-press", name: "Associated Press" },
//               author: "SUSIE BLANN",
//               title:
//                 "Ukraine launched another attack on Sevastopol in Crimea - The Associated Press",
//               description:
//                 "Russia says Ukraine has launched another missile attack on Sevastopol on the occupied Crimean Peninsula. The strike on Saturday came a day after an attack on the headquarters of Russia’s Black Sea Fleet left a serviceman missing and the main building smolderi…",
//               url: "https://apnews.com/article/russia-ukraine-war-crimea-9c287d5bad840beedbd68eb32c4c76a3",
//               urlToImage:
//                 "https://dims.apnews.com/dims4/default/0efd432/2147483647/strip/true/crop/1612x907+0+547/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2Fcd%2F76679cfdb990a36284dd41df620d%2Fd11c1d5d280a4885918c5c038235c213",
//               publishedAt: "2023-09-23T16:40:00Z",
//               content:
//                 "KYIV, Ukraine (AP) Ukraine on Saturday morning launched another missile attack on Sevastopol on the occupied Crimean Peninsula, a Russian-installed official said, a day after an attack on the headqua… [+5252 chars]",
//             },
//             {
//               source: { id: null, name: "Hollywood Reporter" },
//               author: "Mia Galuppo",
//               title:
//                 "Box Office: ‘Expendables 4’ Lands Only $3.2M Friday on Way to Franchise Worst Opening - Hollywood Reporter",
//               description:
//                 "Box office holdovers include the horror installment 'Nun II' and Kenneth Branagh's 'The Haunting in Venice'.",
//               url: "https://www.hollywoodreporter.com/movies/movie-news/expendables-starring-sylvester-stallone-box-office-1235595986/",
//               urlToImage:
//                 "https://www.hollywoodreporter.com/wp-content/uploads/2023/09/exp4-unit-01320-r-EMBED-2023.jpg?w=1000",
//               publishedAt: "2023-09-23T16:07:30Z",
//               content:
//                 "Lionsgate and Millenium’s Expendables 4 has hit theaters with $3.2 million in Friday grosses as the movie heads for a franchise-low opening. Friday’s tally includes $750,000 in Thursday evening previ… [+2629 chars]",
//             },
//             {
//               source: { id: "cnn", name: "CNN" },
//               author: "Betsy Klein, Chris Isidore",
//               title:
//                 "Biden to walk the picket line in Michigan to support UAW strikers - CNN",
//               description:
//                 "President Joe Biden will travel to Michigan on Tuesday and walk the picket line with members of the United Auto Workers union, he announced Friday, a trip that comes after the president faced political pressure to ramp up his public support for the union memb…",
//               url: "https://www.cnn.com/2023/09/22/politics/joe-biden-michigan-trip-uaw/index.html",
//               urlToImage:
//                 "https://media.cnn.com/api/v1/images/stellar/prod/230922141250-02-uaw-strike-expansion-langhorne-pa-0922.jpg?c=16x9&q=w_800,c_fill",
//               publishedAt: "2023-09-23T16:03:00Z",
//               content:
//                 "President Joe Biden will travel to Michigan on Tuesday and walk the picket line with members of the United Auto Workers union, he announced Friday, a trip that comes after the president faced politic… [+4580 chars]",
//             },
//             {
//               source: { id: "cnn", name: "CNN" },
//               author: "Chandelis Duster",
//               title:
//                 "A Texas teen was suspended for weeks over his locs hairstyle. Now, his family is suing the governor - CNN",
//               description:
//                 "A Black high school student who was suspended over his loc hairstyle and his mother have sued Texas Gov. Greg Abbott and the state’s attorney general for allegedly failing to enforce the state’s CROWN Act, a law that protects against hair discrimination.",
//               url: "https://www.cnn.com/2023/09/23/us/darryl-george-texas-crown-act-lawsuit/index.html",
//               urlToImage:
//                 "https://media.cnn.com/api/v1/images/stellar/prod/230920231041-03-darryl-george.jpg?c=16x9&q=w_800,c_fill",
//               publishedAt: "2023-09-23T15:57:00Z",
//               content:
//                 "A Black high school student who was suspended over his locs hairstyle and his mother have sued Texas Gov. Greg Abbott and the states attorney general for allegedly failing to enforce the states CROWN… [+3750 chars]",
//             },
//             {
//               source: { id: "nbc-news", name: "NBC News" },
//               author: "Minyvonne Burke",
//               title:
//                 "13-foot alligator spotted with human remains in its mouth in Florida canal - NBC News",
//               description:
//                 "A 13-foot alligator was spotted with human remains in its mouth in a canal in unincorporated Largo, Florida.",
//               url: "https://www.nbcnews.com/news/us-news/13-foot-alligator-spotted-human-remains-mouth-florida-canal-rcna116994",
//               urlToImage:
//                 "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230923-florida-alligator-canal-mjf-1226-a9048b.jpg",
//               publishedAt: "2023-09-23T15:53:16Z",
//               content:
//                 "A 13-foot alligator was spotted with human remains in its mouth in a canal in unincorporated Largo, Florida. \r\nJamarcus Bullard said he saw the alligator and a body in the water on 134th Avenue North… [+1113 chars]",
//             },
//             {
//               source: { id: null, name: "HarpersBAZAAR.com" },
//               author: "Quinci LeGardye",
//               title:
//                 "Duchess Meghan Embraces Fall Vibes in a Cozy Herringbone Wrap Coat - Harper's BAZAAR",
//               description:
//                 "She and Prince Harry stepped out for a start-studded fundraiser in Santa Barbara",
//               url: "https://www.harpersbazaar.com/celebrity/latest/a45278489/meghan-markle-herringbone-wrap-coat-santa-barbara/",
//               urlToImage:
//                 "https://hips.hearstapps.com/hmg-prod/images/bgus-2734971-001-650ef96c6588c.jpg?crop=1.00xw:0.341xh;0,0.230xh&resize=1200:*",
//               publishedAt: "2023-09-23T15:27:38Z",
//               content:
//                 "Duchess Meghan and Prince Harry made their first appearance since returning stateside last night, where the duchess made an elegant transition to cozy fall dressing.The couple attended the One805 fun… [+1658 chars]",
//             },
//             {
//               source: { id: "cnn", name: "CNN" },
//               author: "Ashley Strickland",
//               title:
//                 "A 7-year journey to deliver an asteroid sample to Earth will soon end in Utah - CNN",
//               description:
//                 "This week, watch an asteroid sample return to Earth, learn why giant pandas have “jet lag,” see a 2,000-year-old child’ shoe and more.",
//               url: "https://www.cnn.com/2023/09/23/world/osiris-rex-sample-science-newsletter-wt-scn/index.html",
//               urlToImage:
//                 "https://media.cnn.com/api/v1/images/stellar/prod/230906122917-03-nasa-osiris-rex-sample-training-model.jpg?c=16x9&q=w_800,c_fill",
//               publishedAt: "2023-09-23T15:00:00Z",
//               content:
//                 "Editors note: A version of this story appeared in CNNs Wonder Theory science newsletter. To get it in your inbox, sign up for free here.\r\nIts the little spacecraft that could.\r\nOn September 8, 2016, … [+5281 chars]",
//             },
//             {
//               source: { id: null, name: "UPI.com" },
//               author: "Karen Butler",
//               title: "Brian Austin Green engaged to Sharna Burgess - UPI News",
//               description:
//                 '"Beverly Hills, 90210" icon Brian Austin Green is engaged to his longtime girlfriend, "Dancing with the Stars" alum Sharna Burgess.',
//               url: "https://www.upi.com",
//               urlToImage:
//                 "https://cdnph.upi.com/sv/ph/og/upi/4721695478319/2023/1/ab251e23381ca0ebb32d334650e2109d/v1.5/Brian-Austin-Green-engaged-to-Sharna-Burgess.jpg",
//               publishedAt: "2023-09-23T14:43:12Z",
//               content:
//                 "Sept. 23 (UPI) --Beverly Hills, 90210 icon Brian Austin Green is engaged to his longtime girlfriend, Dancing with the Stars alum Sharna Burgess.\r\nBurgess showed off her new diamond engagement ring on… [+960 chars]",
//             },
//             {
//               source: { id: null, name: "nj.com" },
//               author: "Katherine Rodriguez | NJ Advance Media for NJ.com",
//               title:
//                 "Will insurance cover my COVID-19 shot? Some companies leaving customers with big bills - NJ.com",
//               description:
//                 "You might want to hold off on making that updated COVID-19 booster appointment. Here's why",
//               url: "https://www.nj.com/coronavirus/2023/09/will-insurance-cover-my-covid-19-shot-some-companies-leaving-customers-with-big-bills.html",
//               urlToImage:
//                 "https://www.nj.com/resizer/9aUKAf2mHZ3wU9YI6Eq-PXbTfw0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/D6YYLGABMJB2RA3OU5XASOVCEY.jpg",
//               publishedAt: "2023-09-23T14:41:00Z",
//               content:
//                 "You might want to hold off on making that updated COVID-19 booster appointment.\r\nSeveral people in the U.S. showing up for their vaccine appointments are being charged between $125 and $190 for their… [+3244 chars]",
//             },
//             {
//               source: { id: "usa-today", name: "USA Today" },
//               author: "John Connolly",
//               title:
//                 "Home explosion in West Milford, New Jersey, leaves 5 hospitalized - USA TODAY",
//               description:
//                 "Around 9 p.m., reports came in to authorities about an explosion in West Milford, about 44 miles northwest of Newark.",
//               url: "https://www.usatoday.com/story/news/nation/2023/09/23/new-jersey-home-explosion/70944780007/",
//               urlToImage:
//                 "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/23/PNJM/70944751007-092223-explosion-17-cs.JPG?crop=5039,2836,x0,y342&width=3200&height=1801&format=pjpg&auto=webp",
//               publishedAt: "2023-09-23T14:28:17Z",
//               content:
//                 "Five people were taken to hospitals after an explosion at a New Jersey home prompted a flurry of 911 calls on Friday night, police said.\r\nAround 9 p.m., reports came in to authorities about an explos… [+879 chars]",
//             },
//             {
//               source: { id: null, name: "YouTube" },
//               author: null,
//               title:
//                 "Microsoft Surface Studio 2 and Surface Go 3 Laptops (Hands-On) - CNET",
//               description:
//                 "Check out CNET editor Josh Goldman's first look at Microsoft's latest Surface laptops. Both laptops have updated internals and should be peppier than their p...",
//               url: "https://www.youtube.com/watch?v=WOLPexX7_wo",
//               urlToImage: "https://i.ytimg.com/vi/WOLPexX7_wo/maxresdefault.jpg",
//               publishedAt: "2023-09-23T12:00:33Z",
//               content: null,
//             },
//             {
//               source: { id: null, name: "[Removed]" },
//               author: null,
//               title: "[Removed]",
//               description: "[Removed]",
//               url: "https://removed.com",
//               urlToImage: null,
//               publishedAt: "1970-01-01T00:00:00Z",
//               content: "[Removed]",
//             },
//             {
//               source: { id: "politico", name: "Politico" },
//               author: null,
//               title:
//                 "Can Katie Britt Be the Face of the GOP's Post-Trump Future? - POLITICO",
//               description:
//                 "The Alabama senator disdains the politics of hate, rarely mentions her party’s frontrunner and favors robust aid to Ukraine. That positions her well to lead a party digging out from Trumpism.",
//               url: "https://www.politico.com/news/magazine/2023/09/23/britt-face-post-trump-future-00117753",
//               urlToImage:
//                 "https://static.politico.com/9b/dc/f8483ca34368aa395e380d53ccfc/20230213-rules-9-francis-3.jpg",
//               publishedAt: "2023-09-23T11:00:00Z",
//               content:
//                 "Her résumé is the stuff of what the coaches in Tuscaloosa and Auburn would call a five-star recruit at least if politics was still being played as it was when she first entered the fray two decades a… [+19367 chars]",
//             },
//             {
//               source: { id: "reuters", name: "Reuters" },
//               author: "Anna Voitenko",
//               title:
//                 "Ukrainian heavy artillery inflicts 'hell' on Russian lines near Bakhmut - Reuters.com",
//               description:
//                 "The use of heavy weapons supplied by the West in the fierce battle raging on the outskirts of Bakhmut, which was captured by Russia in May, is inflicting a significant toll on enemy lines, Ukrainian commanders have told Reuters.",
//               url: "https://www.reuters.com/world/europe/ukrainian-heavy-artillery-inflicts-hell-russian-lines-near-bakhmut-2023-09-23/",
//               urlToImage:
//                 "https://www.reuters.com/resizer/I7Kpxz7nRWK3SBc_VFSI6za9ByA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZOWCBFSRHVPHTBRC2BJOMKO5QA.jpg",
//               publishedAt: "2023-09-23T10:47:00Z",
//               content:
//                 "NEAR BAKHMUT, Sept 22 (Reuters) - The use of heavy weapons supplied by the West in the fierce battle raging on the outskirts of Bakhmut, which was captured by Russia in May, is inflicting a significa… [+1699 chars]",
//             },
//             {
//               source: { id: "business-insider", name: "Business Insider" },
//               author: "Jacob Zinkula, Andy Kiersz",
//               title:
//                 "Baby boomers are happy with high interest rates and home prices - Business Insider",
//               description:
//                 "High home prices and interest rates are creating headaches for young Americans. But they're helping many baby boomers retire comfortably.",
//               url: "https://www.businessinsider.com/baby-boomers-are-happy-interest-rates-home-prices-2023-9",
//               urlToImage:
//                 "https://i.insider.com/650c5f47bf943d00195cb122?width=1200&format=jpeg",
//               publishedAt: "2023-09-23T10:32:00Z",
//               content:
//                 "Buying a home in the US is less affordable\r\n than it's been in decades, but many older Americans are benefiting from the economic environment.\r\nAccording to the National Association of Realtors, US m… [+4976 chars]",
//             },
//         ]);

//       useEffect(() => {
//          return async () => {
//             console.log("Hello there buddy!");
//             let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bf58b8c27de745d48e60abbe9b9f091b";
//             let res = await fetch(url);
//             let parsedRes = await res.json();
//             // console.log(parsedRes);
//             setArticles(parsedRes.articles);
//       //       console.log(this.state.articles);
//         }
//       }, []);
      


//     const trimeTitle = (text) => {
//       if (text.length > 32) {
//         let finalText = "";
//         for (let i = 0; i < text.length && i <= 31; i++) {
//           finalText += text[i];
//         }
//         return finalText + "...";
//       } else {
//         return text;
//       }
//     };

//     const trimDescription = (text) => {
//       if (text.length > 32) {
//         let finalText = "";
//         for (let i = 0; i < text.length && i <= 31; i++) {
//           finalText += text[i];
//         }
//         return finalText + "...";
//       } else {
//         return text;
//       }
//     };

//     return (
//       <div className="bg-dark">
//         <div className="container py-3 my-1">
//           <h2 style={{ color: "white" }}> Top Headline of the week! </h2>
//           <div className="row my-4">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-4 mb-5" key={element.url}>
//                   <NewsItem
//                     title={element.title === null ? "null" : trimeTitle(element.title)}
//                     description={element.description === null ? "null" : trimDescription(element.description)}
//                     imageUrl={element.urlToImage === null ? "null" : element.urlToImage}
//                     newsUrl={element.url}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
// }
