## sigalei frontend and backend stack of our application

## Contents
* [General](#general)
* [Commit Rules](#commit-rules)

## General
- [ ] CI with CircleCI
- [ ] lerna
- [ ] add app_common
- [x] add commit rules
- [ ] add precommit verifications

## API
- [x] api
- [x] new server structure to api
- [x] graphql-playground
- [x] sequelize
- [ ] api unit tests
- [ ] security improvements
- [ ] public and private schemas

## React
- [ ] add react
- [ ] jest
- [ ] try hooks
- [ ] main components

## Commit rules
#### type-enum
* **condition**: `type` is found in value
* **rule**: `always`
* **value**

  ```js
  [
    'build',
    'ci',
    'chore',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test'
  ]
  ```

```sh
echo "foo: some message" # fails
echo "fix: some message" # passes
```

#### type-case
* **description**: `type` is in case `value`
* **rule**: `always`
* **value**
  ```js
    'lowerCase'
  ```

```sh
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

#### type-empty
* **condition**: `type` is empty
* **rule**: `never`

```sh
echo ": some message" # fails
echo "fix: some message" # passes
```

#### scope-case
* **condition**: `scope` is in case `value`
* **rule**: `always`
```js
  'lowerCase'
```

```sh
echo "fix(SCOPE): some message" # fails
echo "fix(scope): some message" # passes
```

#### subject-case
* **condition**: `subject` is in one of the cases `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
* **rule**: `never`

```sh
echo "fix(SCOPE): Some message" # fails
echo "fix(SCOPE): Some Message" # fails
echo "fix(SCOPE): SomeMessage" # fails
echo "fix(SCOPE): SOMEMESSAGE" # fails
echo "fix(scope): some message" # passes
echo "fix(scope): some Message" # passes
```

#### subject-empty
* **condition**: `subject` is empty
* **rule**: `never`

```sh
echo "fix:" # fails
echo "fix: some message" # passes
```

#### subject-full-stop
* **condition**: `subject` ends with `value`
* **rule**: `never`
* **value**
```js
  '.'
```

```sh
echo "fix: some message." # fails
echo "fix: some message" # passes
```


#### header-max-length
* **condition**: `header` has `value` or less characters
* **rule**: `always`
* **value**
```js
  72
```

```sh
echo "fix: some message that is way too long and breaks the line max-length by several characters" # fails
echo "fix: some message" # passes
```

Taken from [@commitlint/config-angular](https://github.com/marionebl/commitlint/tree/master/@commitlint/config-conventional)
