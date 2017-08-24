import { Component } from '@angular/core';
import { SearchService } from '../../providers/search.service';

@Component({
    templateUrl: './search.html',
    styleUrls: ['./search.scss'],
    providers: [SearchService]
})

export class Search {

    result: string;
    searchField: string;

    constructor(
        private searchService: SearchService,
    ) {
        this.result = '';
        this.searchField = '';
    }

    search() {
        this.searchService.search(this.searchField)
            .then(res => {
                this.result  = res.output;
                console.log('test -->', this.result)
            })
    }
}