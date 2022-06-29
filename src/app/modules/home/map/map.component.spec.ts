import { MapComponent } from './map.component';
describe('MapComponent', () => {
  let fixture: MapComponent;
  let routerMock: any;

  beforeEach(() => {
    routerMock = jest.fn();
    fixture = new MapComponent(routerMock);

    fixture.ngOnInit();
  });

  describe('Test: ngOnInit', () => {
    it('should initialize currentuser', () => {
      expect(fixture.apiKey).toEqual(sessionStorage.getItem('apiKey'));
    });
  });
});
