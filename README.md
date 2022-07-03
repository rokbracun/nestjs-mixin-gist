## Description

This is an example of using mixins in NestJS. The example of mixin usage can be found in `person.repository`. Car repository is an example of a regular repository.
Additionally, mixin is also used to add a relation to an entity, just to demonstrate another possible usage.
Mixins could also be used in controllers and services. 

## Disclaimer
The mixin in this example is not needed in the grand scheme of things, it exists only to demonstrate how it can be implemented.

## Installation

```bash
$ yarn install
```

## Database

```bash
$ docker compose up
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
