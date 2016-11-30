/**
 * Created by yujiaguo on 11/30/16.
 */
describe('Testing Hello World',function () {
    beforeEach(module('HelloWorldApp'));

        describe(' Testing Controllers',function () {
            var scope = {};
            var ctrl;
            beforeEach(inject(function ($controller,$rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('HelloUserController',{$scope:scope});
            }));
            afterEach(function () {
                // clean up
            });
            it("should initialize title in scope",function () {

                expect(scope.title).toBeDefined();
            });

            it('should display the name from input',function () {
                scope.name= "kevin";
                expect(scope.name).toBeDefined();
            });
            it('should add 2 destinations to the destination list',function () {
                expect(scope.destinations).toBeDefined();
                expect(scope.destinations.length).toBe(0);
                scope.newDestination= {
                    city: "New York",
                    country : "US"
                };
                scope.addDestination();
                expect(scope.destinations.length).toBe(1);
                expect(scope.destinations[0].city).toBe("New York");
                expect(scope.destinations[0].country).toBe("US");
                scope.newDestination= {
                    city: "Rome",
                    country : "Italy"
                };
                scope.addDestination();
                expect(scope.destinations.length).toBe(2);
                expect(scope.destinations[1].city).toBe("Rome");
                expect(scope.destinations[1].country).toBe("Italy");

            })
    });
});