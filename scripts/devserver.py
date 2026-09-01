#!/usr/bin/env python3
import http.server
import os
import sys

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8822
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(root)


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()


http.server.test(HandlerClass=NoCacheHandler, port=port)
