import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon-component',
  standalone: true,
  templateUrl: './svg-icon-component.component.html',
  styleUrls: ['./svg-icon-component.component.sass'],
  imports: [HttpClientModule]
})
export class SvgIconComponentComponent implements OnChanges {
  @Input() path!: string;
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['path'] && this.path) {
      this.loadSvg(this.path);
    }
  }

  loadSvg(path: string) {
    this.http.get(path, { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      error => {
        console.error('Error loading SVG:', error);
      }
    );
  }
}