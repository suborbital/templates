# Templates

This repo is the basis for creating your own modulee templates for E2Core and Suborbital Extension Engine.

To get started, fork this repo into your own organization. It must be public.

Next, clone your fork and edit `templates/assemblyscript/src/custom.ts` and `templates/assemblyscript/src/lib.ts` to change the template that will be used to create new modules. If you're a SE2 user, `lib.ts` is what will be used for all new functions when your users access the code editor.

Optionally, if you'd like to provide a custom wrapper around the Suborbital core library (i.e. allow your users to import `@acmeco/acmeco` instead of `@suborbital/suborbital`), then edit `library/assemblyscript/package.json` to replace all instances of `acmeco` with your desired name, and then publish the library to NPM. Add your custom library as an import in `templates/assemblyscript/package.json.tmpl` so your custom modules can use it.

You can now use your forked repo as a target for templates, for example `subo create module custom-func --repo acmeco/function-templates --lang typescript --update-templates`
