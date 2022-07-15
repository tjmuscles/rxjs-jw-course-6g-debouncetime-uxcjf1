import { fromEvent } from "rxjs";
import { map, debounceTime } from 'rxjs/operators';

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(1000),
    map(event => event.target['value'])
  )
  .subscribe(val =>  console.log(val));