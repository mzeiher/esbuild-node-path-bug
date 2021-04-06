package main

import (
	"os"
	"path"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	var cwd, _ = os.Getwd()
	result := api.Build(api.BuildOptions{
		NodePaths: []string{
			path.Join(cwd, "NODE_PATH", "node_modules"),
		},
		AbsWorkingDir: path.Join(cwd, "project"),
		Bundle:        true,
		Platform:      api.PlatformNode,
		Outfile:       "./out.js",
		EntryPoints:   []string{"index.js"},
		Write:         true,
		LogLevel:      api.LogLevelInfo,
		LogLimit:      0,
	})

	if len(result.Errors) > 0 {
		os.Exit(1)
	}
}
