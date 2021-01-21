import { suite, test } from '@testdeck/mocha';
import { allure, MochaAllure } from 'allure-mocha/runtime';
import { expect } from 'chai';
import { decorate, feature } from 'ts-test-decorators';

@suite
class Test {
    @test
    @feature('Login')
    itShouldWork() {
        expect(1).equals(1);
    }

    before() {
        decorate<MochaAllure>(allure);
    }
}
