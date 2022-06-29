import { CityComponent } from './city.component';
describe('CityComponent', () => {
  let fixture: CityComponent;
  let routerMock: any;
  let routeMock: any;
  let weatherServiceMock: any;
  beforeEach(() => {
    routerMock = jest.fn();
    routeMock = jest.fn();
    weatherServiceMock = jest.fn();

    fixture = new CityComponent(routeMock, routerMock, weatherServiceMock);
    fixture.ngOnInit();
  });

  describe('Test: ngOnInit', () => {
    it('should initialize current city', () => {
      if (sessionStorage.getItem('apiKey')) {
        expect(fixture.apiKey).toEqual(sessionStorage.getItem('apiKey'));
        routeMock.params.subscribe((params: any) => {
          expect(fixture.cityName).toEqual(params);
        });
      } else {
        console.log("api key couldn't get it");
      }
    });
  });
});
