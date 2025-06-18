import Route from '@ember/routing/route';

export default class FieldPropertyRoute extends Route {
  model(params) {
    return {
      params: params,
      properties: [
        {
          property: {
            label: 'Name',
            name: 'name',
          },
        },
        {
          property: {
            label: 'Countries',
            name: 'country',
            constraint: {
              enumeration: ['France', 'England', 'Italy'],
            },
          },
        },
      ],
    };
  }
}
