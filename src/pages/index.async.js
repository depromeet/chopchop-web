import asyncRoute from 'lib/asyncRoute';

export const Main = asyncRoute(()=>import('./Main'));
export const MyPage = asyncRoute(()=>import('./MyPage'));
export const PinList = asyncRoute(()=>import('./PinList'));
export const RoomList = asyncRoute(()=>import('./RoomList'));