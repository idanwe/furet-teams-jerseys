/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

import {bootstrap} from 'angular2-meteor'

import {Teams} from 'collections/teams';


@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.html',
  directives: [NgFor]
})
class FuretJerseys {
  teams: Mongo.Cursor<Object>;

  constructor () {
    this.teams = Teams.find({}, { sort: { rank: 1 } });
  }

  getHomeUrl (team) {
    return team.home || 'http://img.uefa.com/imgml/TP/teams/kits/80x105/' + team.uefa_id + '_1.png';
  }

  getAwayUrl (team) {
    return team.away || 'http://img.uefa.com/imgml/TP/teams/kits/80x105/' + team.uefa_id + '_2.png';
  }

  getGoogleSearch (team, type) {
    let q = team._id.replace(' ', '+') + '+' + type + '+jersey+15/16'
    return 'https://www.google.co.il/?gfe_rd=cr&ei=mC0xVqLSIsHH8geBhKiQDA&gws_rd=ssl#q=' + q;
  }
}

bootstrap(FuretJerseys);

