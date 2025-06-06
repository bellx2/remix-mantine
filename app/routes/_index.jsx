import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Grid, 
  Card, 
  Center,
  Stack,
  ThemeIcon,
  Anchor,
  ActionIcon,
  Tooltip,
  useMantineColorScheme
} from '@mantine/core';
import { Link } from '@remix-run/react';
import { IconRocket, IconCode, IconPalette, IconBrandMantine, IconMoon, IconSun } from '@tabler/icons-react';

export const meta = () => {
  return [
    { title: "Remix + Mantine テンプレート" },
    { name: "description", content: "Remix と Mantine を使用したテンプレートページ" },
  ];
};

// カラースキーム切り替えコンポーネント
function ColorSchemeToggleButton() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Tooltip label={colorScheme === 'light' ? 'ダークモード' : 'ライトモード'}>
      <ActionIcon
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="lg"
      >
        {colorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
      </ActionIcon>
    </Tooltip>
  );
}

export default function Index() {
  return (
    <Container size="lg" py="xl">
      <Stack spacing="xl">
        {/* ヘッダー */}
        <Center>
          <Stack align="center" spacing="md">
            <ThemeIcon size={80} radius="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
              <IconBrandMantine size={50} />
            </ThemeIcon>
            <Title order={1} align="center">
              Remix + Mantine テンプレート
            </Title>
            <Text color="dimmed" align="center">
              モダンなReactフレームワークとUIライブラリの組み合わせ
            </Text>
            <ColorSchemeToggleButton />
            <Button 
              size="md" 
              variant="gradient" 
              gradient={{ from: 'blue', to: 'cyan' }}
              component={Link}
              to="/dashboard"
            >
              ダッシュボードへ
            </Button>
          </Stack>
        </Center>

        {/* 機能カード */}
        <Grid mt="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack>
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <IconRocket size={24} />
                </ThemeIcon>
                <Title order={3}>高速な開発</Title>
                <Text size="sm" color="dimmed">
                  Remixの優れたDXとMantineの豊富なコンポーネントで、
                  素早くアプリケーションを構築できます。
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack>
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconCode size={24} />
                </ThemeIcon>
                <Title order={3}>型安全</Title>
                <Text size="sm" color="dimmed">
                  TypeScriptを使用して、
                  型安全なコードを書くことができます。
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack>
                <ThemeIcon size={40} radius="md" variant="light" color="violet">
                  <IconPalette size={24} />
                </ThemeIcon>
                <Title order={3}>美しいUI</Title>
                <Text size="sm" color="dimmed">
                  Mantineの洗練されたコンポーネントで、
                  美しいユーザーインターフェースを実現。
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* リンクセクション */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack>
            <Title order={3}>参考リンク</Title>
            <Group>
              <Anchor href="https://remix.run/docs" target="_blank">
                Remix ドキュメント
              </Anchor>
              <Anchor href="https://mantine.dev" target="_blank">
                Mantine ドキュメント
              </Anchor>
              <Anchor href="https://github.com" target="_blank">
                GitHub
              </Anchor>
            </Group>
          </Stack>
        </Card>

        {/* CTA */}
        <Center mt="xl">
          <Group>
            <Button 
              size="lg" 
              variant="gradient" 
              gradient={{ from: 'blue', to: 'cyan' }}
              component={Link}
              to="/dashboard"
            >
              ダッシュボードへ
            </Button>
            <Button 
              size="lg" 
              variant="default"
              component="a"
              href="https://mantine.dev"
              target="_blank"
            >
              詳細を見る
            </Button>
          </Group>
        </Center>
      </Stack>
    </Container>
  );
}