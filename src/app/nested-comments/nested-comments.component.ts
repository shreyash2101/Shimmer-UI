import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-comments',
  templateUrl: './nested-comments.component.html',
  styleUrl: './nested-comments.component.scss',
})
export class NestedCommentsComponent {
  data = [
    {
      username: 'Akshay Saini',
      comment: 'Lorem ipsum dolor sit amet consectetur adip occurence velit',
      replies: [
        {
          username: 'Deepika Padukone',
          comment:
            'Lorem ipsum dolor sit amet consectetur adip occurence velit',
        },
      ],
    },
    {
      username: 'Elon Musk',
      comment: 'Lorem ipsum dolor sit amet consectetur adip occurence velit',
      replies: [
        {
          username: 'Deepika Padukone',
          comment:
            'Lorem ipsum dolor sit amet consectetur adip occurence velit',
          replies: [
            {
              username: 'Deepika Padukone',
              comment:
                'Lorem ipsum dolor sit amet consectetur adip occurence velit',
              replies: [
                {
                  username: 'Deepika Padukone',
                  comment:
                    'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                  replies: [
                    {
                      username: 'Deepika Padukone',
                      comment:
                        'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                      replies: [
                        {
                          username: 'Deepika Padukone',
                          comment:
                            'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                          replies: [
                            {
                              username: 'Deepika Padukone',
                              comment:
                                'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              username: 'Deepika Padukone',
              comment:
                'Lorem ipsum dolor sit amet consectetur adip occurence velit',
            },
          ],
        },
        {
          username: 'Deepika Padukone',
          comment:
            'Lorem ipsum dolor sit amet consectetur adip occurence velit',
        },
      ],
    },
    {
      username: 'Sachin Tendulkar',
      comment: 'Lorem ipsum dolor sit amet consectetur adip occurence velit',
    },
  ];
}
