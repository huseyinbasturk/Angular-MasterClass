import { AppComponent } from "./app.component";

describe('AppComponenet', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
})