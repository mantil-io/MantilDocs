---
sidebar_position: 19
---

# mantil logs

Fetches logs for a specific API

Logs can be filtered using Cloudwatch filter patterns.
For more information see:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html

If the --tail option is set the process will keep running and polling for new logs every second.

### USAGE
```
  mantil logs <api> [options]
```
### ARGUMENTS
```
  <api>      Name of the API. Your APIs are in /api folder.
```
### OPTIONS
```
  -p, --filter-pattern string   Filter pattern to use
  -f, --from duration           From what time to begin displaying logs, default is 3 hours ago (default 3h0m0s)
  -s, --stage string            Project stage to target instead of default
  -t, --tail                    Continuously poll for new logs
```
### GLOBAL OPTIONS
```
      --help       Show command help
      --no-color   Don't use colors in output
```

