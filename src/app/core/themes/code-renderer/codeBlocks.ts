export interface IDisplayData {name: string; code: string; url: boolean; }
export const displaysList: IDisplayData[] = [
  {
    name: 'install.01',
    code:
`sudo apt install npm nodejs
npm -v
nodejs -v
npm install g @angular/cli
ng version`,
    url: false
  },
  {
    name: 'typescript',
    code:
`import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';`,
    url: false,
  },
  {
    name: 'scss',
    code:
`.route-header {
  margin: 2em 0;
  padding-bottom: 1em;
  border-bottom: 2px solid #DDD;
}`,
    url: false,
  },
  {
    name: 'json',
    code:
`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`,
    url: false,
  },
];
