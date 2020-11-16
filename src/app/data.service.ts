import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  HttpClient
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption = []
  postsData: any;
  postUrl: string = "../assets/tweet.json";
  calenderUrl: string = "../assets/calendar.json";
  slackUrl: string = "../assets/slack.json";
  dropBoxUrl: string = "../assets/dropbox.json";
  contactUrl: string = "../assets/contacts.json";

  constructor(
    private http: HttpClient
  ) {}


  getPosts(): Observable < any > {
    return this.http.get < any > (this.postUrl);

  }

  getCalenders(): Observable < any > {
    return this.http.get < any > (this.calenderUrl);

  }


  getSlack(): Observable < any > {
    return this.http.get < any > (this.slackUrl);

  }

  getDB(): Observable < any > {
    return this.http.get < any > (this.dropBoxUrl);

  }

  getContacts(): Observable < any > {
    return this.http.get < any > (this.contactUrl);

  }


  filteredListOptions(po: any) {

    let filteredPostsList = [];
    for (let post of po) {
      for (let options of this.searchOption) {
        if (options.matching_terms === post.matching_terms) {
          filteredPostsList.push(post);
        }
      }
    }

    return filteredPostsList;
  }
}
