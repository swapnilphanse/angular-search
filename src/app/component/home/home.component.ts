import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post;
  calendar;
  contact;
  slack;
  dropbox;


  constructor(
    private dataService: DataService,

  ) {}

  ngOnInit() {
    // this.dataService.getPosts().subscribe(posts => {
    //   this.post = posts.tweets
    //   this.dataService.postsData = posts.tweets
    // });

    // this.dataService.getCalenders().subscribe(calendars => {
    //   this.calendar = calendars.calendar
    //   this.dataService.calendarData = calendars.calendar
    // });

  }

  onSelectedOption(e) {
    this.getFilteredExpenseList(e);
  }

  getFilteredExpenseList(e) {

    if (this.dataService.searchOption.length > 0) {


      this.calendar = e;
      this.post = e;
      this.contact = e;
      this.slack = e;
      this.dropbox = e;

    } else {

      this.calendar = this.dataService.postsData
      this.post = this.dataService.postsData;
      this.contact = this.dataService.postsData;
      this.slack = this.dataService.postsData;
      this.dropbox = this.dataService.postsData;

    }
    console.log(this.post)
  }

}
