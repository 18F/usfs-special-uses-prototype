# Operations

This prototype runs on Cloud.gov using their Staticfile buildpack where it
simply serves files from the `/site/` directory of this repository.

## Infrastructure

The Cloud.gov infrastructure is simple. There is a single app in a single
space. If there is an org and a space, then the app can be pushed according
to the manifest in `ops/manifests/manifest.yaml`.

```bash
$ cf push -f ops/manifests/manifest.yaml
```

## Deployment

Deploys are automatic from the `main` branch whenever a pull request is merged,
using the workflow in `.github/workflows/deploy-main.yaml`. For continuous
deployment, we need Cloud.gov credentials for the deploy user in Github Actions

```bash
$ cf create-service cloud-gov-service-account space-deployer github-cd-account
[...]
$ cf create-service-key github-cd-account github-cd-key
[...]
$ cf service-key github-cd-account github-cd-key
Getting key github-cd-key for service instance github-cd-account as neil.martinsen-burrell@gsa.gov...

{
 "password": "....",
 "username": "...."
}
```

And those values of `username` and `password` are stored in Github Actions
secrets called `CF_USERNAME` and `CF_PASSWORD` at
<https://github.com/18F/usfs-special-uses-prototype/settings/secrets/actions>
