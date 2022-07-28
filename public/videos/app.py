import http.server
import socketserver

from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys

handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(('', 8000), handler) as httpd:
  print('Server listening on port 8000...')
  httpd.serve_forever()

# class CORSRequestHandler (SimpleHTTPRequestHandler):
#     def end_headers (self):
#         self.send_header('Access-Control-Allow-Origin', '*')
#         SimpleHTTPRequestHandler.end_headers(self)
