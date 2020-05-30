import {match} from '../src';

test('', () => {
    expect(
        match(['#content', "#content-1"], '#content #content-1 .family .sib')
    ).toStrictEqual(true);
});
