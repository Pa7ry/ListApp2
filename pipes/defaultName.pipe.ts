import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'defaultName'})
export class DefaultNamePipe implements PipeTransform {
    transform(value: string, defecto: string): string {
        return ( value )? value: defecto;
    }
}