import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'Clean Code ',
        author: 'Robert C Martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
        amount: 800,
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller',
        image:
          'https://m.media-amazon.com/images/I/41YakMLJktL._SY429_BO1,204,203,200_.jpg',
        amount: 18300,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'T Cormen',
        image:
          'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 1500,
      },
    ];
  }
}
