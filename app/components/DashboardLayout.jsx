import { useState } from 'react';
import { Outlet, Link, useLocation } from '@remix-run/react';
import {
  AppShell,
  Burger,
  Group,
  Text,
  UnstyledButton,
  useMantineTheme,
  rem,
  ScrollArea,
  Divider,
  Box,
  ThemeIcon,
  Badge,
  ActionIcon,
  Tooltip,
  Transition,
} from '@mantine/core';
import {
  IconHome,
  IconChartBar,
  IconUsers,
  IconSettings,
  IconBell,
  IconLogout,
  IconSearch,
  IconMessage,
  IconDatabase,
  IconReportAnalytics,
  IconShoppingCart,
  IconCalendar,
  IconMoon,
  IconSun,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';

// ナビゲーションアイテムの定義
const navItems = [
  { label: 'ダッシュボード', icon: IconHome, to: '/dashboard' },
  { label: 'アナリティクス', icon: IconChartBar, to: '/dashboard/analytics', badge: '3' },
  { label: 'ユーザー管理', icon: IconUsers, to: '/dashboard/users' },
  { label: 'データベース', icon: IconDatabase, to: '/dashboard/database' },
  { label: 'レポート', icon: IconReportAnalytics, to: '/dashboard/reports' },
  { label: '売上管理', icon: IconShoppingCart, to: '/dashboard/sales' },
  { label: 'カレンダー', icon: IconCalendar, to: '/dashboard/calendar' },
  { label: 'メッセージ', icon: IconMessage, to: '/dashboard/messages', badge: '12' },
];

const bottomNavItems = [
  { label: '設定', icon: IconSettings, to: '/dashboard/settings' },
];

export function DashboardLayout() {
  const theme = useMantineTheme();
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  // ナビゲーションアイテムコンポーネント
  const NavItem = ({ item }) => {
    const isActive = location.pathname === item.to;
    
    if (collapsed) {
      return (
        <Tooltip label={item.label} position="right" withArrow>
          <UnstyledButton
            component={Link}
            to={item.to}
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              backgroundColor: isActive
                ? colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0]
                : 'transparent',
              '&:hover': {
                backgroundColor: colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              },
            }}
          >
            <ThemeIcon
              variant={isActive ? 'filled' : 'light'}
              size={30}
            >
              <item.icon size={18} />
            </ThemeIcon>
          </UnstyledButton>
        </Tooltip>
      );
    }
    
    return (
      <UnstyledButton
        component={Link}
        to={item.to}
        style={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          backgroundColor: isActive
            ? colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
            : 'transparent',
          '&:hover': {
            backgroundColor: colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <ThemeIcon
            variant={isActive ? 'filled' : 'light'}
            size={30}
          >
            <item.icon size={18} />
          </ThemeIcon>
          <Text size="sm" weight={500} c={colorScheme === 'dark' ? 'white' : 'dark'}>
            {item.label}
          </Text>
          {item.badge && (
            <Badge size="sm" variant="filled" color="red" ml="auto">
              {item.badge}
            </Badge>
          )}
        </Group>
      </UnstyledButton>
    );
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: collapsed ? 80 : 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              hiddenFrom="sm"
              size="sm"
            />
            <ActionIcon
              variant="default"
              size="lg"
              onClick={() => setCollapsed((c) => !c)}
              visibleFrom="sm"
            >
              {collapsed ? <IconChevronsRight size={18} /> : <IconChevronsLeft size={18} />}
            </ActionIcon>
            <Text size="xl" weight={700}>
              管理ダッシュボード
            </Text>
          </Group>
          
          <Group>
            <Tooltip label="検索">
              <ActionIcon variant="default" size="lg">
                <IconSearch size={18} />
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label="通知">
              <ActionIcon variant="default" size="lg">
                <Box pos="relative">
                  <IconBell size={18} />
                  <Box
                    pos="absolute"
                    top={-2}
                    right={-2}
                    w={8}
                    h={8}
                    bg="red"
                    style={{ borderRadius: '50%' }}
                  />
                </Box>
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label={colorScheme === 'light' ? 'ダークモード' : 'ライトモード'}>
              <ActionIcon
                variant="default"
                size="lg"
                onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
              >
                {colorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
              </ActionIcon>
            </Tooltip>
            
            <Tooltip label="ログアウト">
              <ActionIcon variant="default" size="lg" color="red">
                <IconLogout size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={collapsed ? "xs" : "md"}>
        <AppShell.Section grow component={ScrollArea}>
          <Box mb="md">
            {!collapsed && (
              <Text size="xs" weight={500} c="dimmed" mb="sm">
                メインメニュー
              </Text>
            )}
            {navItems.map((item) => (
              <Box key={item.to} mb="xs">
                <NavItem item={item} />
              </Box>
            ))}
          </Box>
        </AppShell.Section>
        
        <Divider my="sm" />
        
        <AppShell.Section>
          {bottomNavItems.map((item) => (
            <Box key={item.to} mb="xs">
              <NavItem item={item} />
            </Box>
          ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}