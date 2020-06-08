import { Express, Request, Response } from 'express';
import passport from 'passport';
import Server from 'next/dist/next-server/server/next-server';

export default function authRoutes(_app: Server, server: Express): void {
  server.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['read:user', 'public_repo'],
    }),
  );

  server.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    (_req: Request, res: Response) => {
      res.redirect('/');
    },
  );

  server.get('/api/logout', (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
  });

  server.get('/api/current_user', (req: Request, res: Response) => {
    res.send(req.user);
  });
}
