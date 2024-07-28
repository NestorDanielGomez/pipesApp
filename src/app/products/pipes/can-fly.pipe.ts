import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFLy'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean ): "vuela" | "no vuela" {
    return value ? "vuela" : "no vuela"
  }
}
