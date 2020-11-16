import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
}

from '@angular/core';

import {
  FormControl
}

from '@angular/forms';

import {
  Observable
}

from 'rxjs';

import {
  DataService
}

from '../../data.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  }

) export class SearchComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable < string[] > ;
  allPosts: any;
  autoCompleteList: any[];
  testres = [];


  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(public dataService: DataService,

  ) {}

  ngOnInit() {

    this.dataService.getPosts().subscribe(posts => {


        Array.prototype.push.apply(this.testres, posts.tweets);


      }

    );

    this.dataService.getCalenders().subscribe(cal => {

        Array.prototype.push.apply(this.testres, cal.calendar);

      }

    );

    this.dataService.getSlack().subscribe(slack => {

        Array.prototype.push.apply(this.testres, slack.slack);

      }

    );

    this.dataService.getContacts().subscribe(contacts => {

        Array.prototype.push.apply(this.testres, contacts.contacts);

      }

    );

    this.dataService.getDB().subscribe(db => {

        Array.prototype.push.apply(this.testres, db.dropbox);

      }

    );


    this.myControl.valueChanges.subscribe(userInput => {
        this.autoCompleteExpenseList(userInput);
      }

    )
  }

  private autoCompleteExpenseList(input) {

    let categoryList = this.filterCategoryList(input);
    if (categoryList)
      this.autoCompleteList = categoryList;

  }

  filterCategoryList(val) {
    if (typeof val != "string") {
      return [];
    }

    if (val === '' || val === null) {
      return [];
    }

    val = val.toLowerCase();
    const res = this.testres.filter(s => s.matching_terms.indexOf(val) != -1);
    return val ? res : this.allPosts;

  }

  displayFn(post: any) {
    let k = post ? post.matching_terms : post;
    return k;
  }



  filterPostList(event) {

    var posts = event.source.value;

    if (!posts) {
      this.dataService.searchOption = []
    } else {
      this.dataService.searchOption.push(posts);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }

    this.focusOnPlaceInput();
  }



  removeOption(option) {

    let index = this.dataService.searchOption.indexOf(option);

    if (index >= 0) this.dataService.searchOption.splice(index, 1);

    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.dataService.searchOption)
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }


}
