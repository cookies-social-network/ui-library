## @cookies-social-network/components

# TODO:
- [ ] Проверить установку зависимостей отдельных приложений.
- [ ] Проверить установку зависимостей монорепозитория.

### Отдельный запуск приложения при помощи:
```cmd
yarn install --frozen-lockfile
yarn storybook
```
### Для запуска всех npm библиотек нужно:
1. Создать структуру.
```cmd
/cookies-lib
  /packages
    /components - UIKit проекта.
    /lib - Вспомогательные утилиты проекта.
  package.json
  pnpm-lock.yaml
  pnpm-workspace.yaml
```
2. При помощи **pnpm** установить зависимости.
```cmd
pnpm install --frozen-lockfile
```
3. Для запуска каждой библиотеки из монорепозитория:
   1. Зайти в нужный репозиторий (lib / components)
   2. pnpm install --frozen-lockfile // создает ссылки на главный пакет node-modules
   3. pnpm storybook

[UiKit 1](https://pixso.net/app/editor/BJ9AbjwROaGXzRaz1lqRrg?icon_type=1&page-id=47909%3A2&item-id=52805%3A28112)

[UiKit 2](https://pixso.net/app/editor/mW4yFV6QRQZLYldl68nT7A?icon_type=1&page-id=1480%3A0)

```
npm version patch
npm publish --access public
```
