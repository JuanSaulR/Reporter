import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { Report } from 'src/app/models/Report';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  reportRequest: Report = new Report();
  title = 'dropzone';
  files: File[] = [];
  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  async addPhotos(file) {
    const newPhoto: Photo = new Photo();
    newPhoto.fileName = file.name;
    newPhoto.contentType = file.type;
    
    const content = await this.readFileContent(file);
    newPhoto.content = this.arrayBufferToBase64(content);
    
    this.reportRequest.photos.push(newPhoto);
  }

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  readFileContent(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target.result instanceof ArrayBuffer) {
          resolve(event.target.result);
        } else {
          reject(new Error('File content is not an ArrayBuffer.'));
        }
      };
      reader.onerror = (event: ProgressEvent<FileReader>) => {
        reject(event.target.error);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  async addReport() {
    for (const file of this.files) {
      await this.addPhotos(file);
    }
    
    console.log("this.reportRequest");
    console.log(this.reportRequest);
  }

}
