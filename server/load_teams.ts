import {Teams} from 'collections/teams';

export function loadTeams() {

  if (Teams.find().count() === 0) {
    let teams = [
      { _id: "AC Milan",                 rank: 88,  uefa_id: 50058, classic: true },
      { _id: "Ajax",                     rank: 21,  uefa_id: 50143, classic: true },
      { _id: "Arsenal",                  rank: 8,   uefa_id: 52280, classic: true },
      { _id: "Athletic Bilbao",          rank: 43,  uefa_id: 50125 },
      { _id: "Atlético Madrid",          rank: 5,   uefa_id: 50124, classic: true },
      { _id: "Barcelona",                rank: 1,   uefa_id: 50080, classic: true },
      { _id: "Basel",                    rank: 45,  uefa_id: 59856 },
      { _id: "Bayer Leverkusen",         rank: 16,  uefa_id: 50109 },
      { _id: "Bayern München",           rank: 2,   uefa_id: 50037, classic: true },
      { _id: "Benfica",                  rank: 14,  uefa_id: 50147, classic: true },
      { _id: "Boca Juniors",             rank: 46,  home: 'http://4.bp.blogspot.com/-SOqBumZeUJM/VbFQPG20djI/AAAAAAAAoTA/NNP_fGohZy8/s550/boca-juniors-15-16-home-kit.jpg', away: 'http://4.bp.blogspot.com/-SiD7LDw8b2A/VdNMbd14ZWI/AAAAAAAAp6I/478wqWHO9mE/s550/boca-juniors-15-16-away-kit%2B%25282%2529.jpg',  classic: true },
      { _id: "Borussia Dortmund",        rank: 11,  uefa_id: 52758, classic: true },
      { _id: "Borussia Mönchengladbach", rank: 29,  uefa_id: 52757 },
      { _id: "Celta Vigo",               rank: 19,  home: 'http://1.bp.blogspot.com/-JPvTKG2yCEY/VaN8pLle1aI/AAAAAAAAnSs/X6lWHowFsl4/s500/celta-vigo-15-16-home-kit-1.jpg', away: 'http://3.bp.blogspot.com/-Jur6dRYUPJg/VaN8pNdkChI/AAAAAAAAnSo/msAWPldLo4E/s500/celta-vigo-15-16-away-kit-1.jpg' },
      { _id: "Celtic",                   rank: 47,  uefa_id: 50050, classic: true },
      { _id: "Chelsea",                  rank: 18,  uefa_id: 52914, classic: true },
      { _id: "Corinthians",              rank: 23,  home: 'http://3.bp.blogspot.com/-RMuY37QJTP0/Vecm4WQ6-0I/AAAAAAAAqfg/H243NjvmfzA/s496/corinthians-15-16-home-kit-1.jpg', away: 'http://3.bp.blogspot.com/-UHG9Vxfo60c/Vct_IHDvnaI/AAAAAAAAppk/a7YSrn4U1nY/s512/corinthians-2015-16-away-kit%2B%25281%2529.jpg',  classic: true },
      { _id: "CSKA Moskva",              rank: 35,  uefa_id: 54266, classic: true },
      { _id: "Dnipro Dnipropetrovsk",    rank: 42,  uefa_id: 50158 },
      { _id: "Dynamo Kyiv",              rank: 25,  uefa_id: 52723 },
      { _id: "Everton FC",               rank: 49,  uefa_id: 52281, classic: true },
      { _id: "FC Porto",                 rank: 9,   uefa_id: 50064, classic: true },
      { _id: "Fenerbahçe",               rank: 52,  uefa_id: 52692, classic: true },
      { _id: "Feyenoord",                rank: 53,  uefa_id: 52749, classic: true },
      { _id: "Fiorentina",               rank: 22,  uefa_id: 52817 },
      { _id: "Galatasaray",              rank: 74,  uefa_id: 50067, classic: true },
      { _id: "Grêmio",                   rank: 50,  home: 'http://frombrazilto.com/image/cache/data/2015/D21-0033-934_zoom1-700x700.jpg', away: 'http://i.ebayimg.com/images/g/eq4AAOSwWKtUt7cD/s-l500.jpg' },
      { _id: "Inter Milan",              rank: 38,  uefa_id: 50138, classic: true },
      { _id: "Juventus",                 rank: 6,   uefa_id: 50139, classic: true },
      { _id: "Lazio",                    rank: 28,  uefa_id: 52973, classic: true },
      { _id: "Levadia Tallinn",          rank: 48,  uefa_id: 77482},
      { _id: "Liverpool FC",             rank: 44,  uefa_id: 7889,  classic: true },
      { _id: "Lyon",                     rank: 39,  uefa_id: 5312 },
      { _id: "Manchester City",          rank: 7,   uefa_id: 52919, classic: true },
      { _id: "Manchester United",        rank: 10,  uefa_id: 52682, classic: true },
      { _id: "Monaco",                   rank: 32,  uefa_id: 50023 },
      { _id: "Olympiakos",               rank: 26,  uefa_id: 2610 },
      { _id: "Olympique Marseille",      rank: 91,  uefa_id: 52748, classic: true },
      { _id: "Paris Saint Germain",      rank: 4,   uefa_id: 52747, classic: true },
      { _id: "PSV Eindhoven",            rank: 30,  uefa_id: 50062, classic: true },
      { _id: "Rangers",                  rank: 98,  uefa_id: 50121, classic: true },
      { _id: "Real Madrid",              rank: 3,   uefa_id: 50051, classic: true },
      { _id: "River Plate",              rank: 36,  home: 'http://2.bp.blogspot.com/-fj8e2O34R8I/VBkux6-nPfI/AAAAAAAAYbk/QE0KTnhzC8A/s1600/River-14-15-Home-Kit%2B(1).jpg', away: 'http://i.ebayimg.com/images/i/171796166801-0-1/s-l1000.jpg',  classic: true },
      { _id: "Roma",                     rank: 17,  uefa_id: 50137, classic: true },
      { _id: "Schalke 04",               rank: 41,  uefa_id: 57388, classic: true },
      { _id: "Sevilla",                  rank: 15,  uefa_id: 52714 },
      { _id: "Shakhtar Donetsk",         rank: 31,  uefa_id: 52707 },
      { _id: "Sparta Prague",            rank: 34,  uefa_id: 50033 },
      { _id: "Sporting",                 rank: 27,  uefa_id: 50149, classic: true },
      { _id: "SSC Napoli",               rank: 13,  uefa_id: 50136 },
      { _id: "São Paulo",                rank: 117, home: 'http://1.bp.blogspot.com/-HQmPcuLlo9E/VUfyPQq1UzI/AAAAAAAAh1Q/zQP5Ulqa3d4/s453/Sao%2BPaulo-2015-2016-Home-Kit%2B(1).jpg', away: 'http://4.bp.blogspot.com/-oix2jUTwQpQ/VUfyPsIn24I/AAAAAAAAh1Y/kDV4Ldv5RPA/s453/Sao%2BPaulo-2015-2016-Away-Kit%2B(1).jpg',  classic: true },
      { _id: "Tottenham Hotspur",        rank: 24,  uefa_id: 1652,  classic: true },
      { _id: "Valencia",                 rank: 20,  uefa_id: 52268 },
      { _id: "Viktoria Plzeň",           rank: 37,  uefa_id: 64388 },
      { _id: "Villarreal",               rank: 40,  uefa_id: 70691 },
      { _id: "Wolfsburg",                rank: 12,  uefa_id: 64332 },
      { _id: "Zenit St. Petersburg",     rank: 33,  uefa_id: 52826, classic: true }
    ];

    for (let i = 0; i < teams.length; i++) {
      Teams.insert(teams[i]);
    }
  }
};
