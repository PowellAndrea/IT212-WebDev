/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvcChatService } from './svcChat.service';

describe('Service: SvcChat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcChatService]
    });
  });

  it('should ...', inject([SvcChatService], (service: SvcChatService) => {
    expect(service).toBeTruthy();
  }));
});
