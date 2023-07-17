<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

today-noi-bz-it
=============

[![REUSE Compliance](https://github.com/noi-techpark/it.bz.noi.today/actions/workflows/reuse.yml/badge.svg)](https://github.com/noi-techpark/odh-docs/wiki/REUSE#badges)
[![CI/CD](https://github.com/noi-techpark/it.bz.noi.today/actions/workflows/main.yml/badge.svg)](https://github.com/noi-techpark/it.bz.noi.today/actions/workflows/main.yml)

is a simple website which displays the events taking place at the NOI Techpark in Bolzano/Bozen on https://today.noi.bz.it

Technologies used:
---------------------
- Angular
- Twitter Bootstrap
- Moment.js

### REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```
