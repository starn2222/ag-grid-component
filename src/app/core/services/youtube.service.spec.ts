import { TestBed, inject } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [YoutubeService, ApiService]
    });
  });

  it('should be created', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
