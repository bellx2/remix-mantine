import {
  Grid,
  Card,
  Text,
  Title,
  Group,
  RingProgress,
  SimpleGrid,
  Paper,
  Center,
  ThemeIcon,
  Progress,
  Box,
  Stack,
  Badge,
} from '@mantine/core';
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconUsers,
  IconShoppingCart,
  IconEye,
  IconCoins,
} from '@tabler/icons-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// サンプルデータ
const statsData = [
  {
    title: '総ユーザー数',
    value: '34,456',
    diff: 18,
    icon: IconUsers,
    color: 'blue',
  },
  {
    title: '売上高',
    value: '¥12,456,000',
    diff: -13,
    icon: IconShoppingCart,
    color: 'green',
  },
  {
    title: 'ページビュー',
    value: '987,654',
    diff: 32,
    icon: IconEye,
    color: 'violet',
  },
  {
    title: '収益',
    value: '¥8,234,000',
    diff: 7,
    icon: IconCoins,
    color: 'orange',
  },
];

const chartData = [
  { name: '1月', value: 400, pv: 2400 },
  { name: '2月', value: 300, pv: 1398 },
  { name: '3月', value: 600, pv: 9800 },
  { name: '4月', value: 800, pv: 3908 },
  { name: '5月', value: 700, pv: 4800 },
  { name: '6月', value: 900, pv: 3800 },
];

export const meta = () => {
  return [
    { title: "ダッシュボード | 管理画面" },
    { name: "description", content: "管理ダッシュボードのメインページ" },
  ];
};

function StatsCard({ stat }) {
  const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Card withBorder p="md" radius="md">
      <Group justify="space-between">
        <Box>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {stat.title}
          </Text>
          <Text fw={700} size="xl">
            {stat.value}
          </Text>
        </Box>
        <ThemeIcon
          color="gray"
          variant="light"
          style={{
            color: stat.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
          }}
          size={38}
          radius="md"
        >
          <DiffIcon size={20} stroke={1.5} />
        </ThemeIcon>
      </Group>

      <Group mt="md">
        <Text fz="sm" c={stat.diff > 0 ? 'teal' : 'red'} fw={500}>
          <span>{stat.diff}%</span>
        </Text>
        <Text fz="sm" c="dimmed" fw={400}>
          前月比
        </Text>
      </Group>

      <Progress value={Math.abs(stat.diff) * 2} mt="md" size="sm" radius="xl" color={stat.color} />
    </Card>
  );
}

export default function DashboardIndex() {
  return (
    <Box>
      <Title order={2} mb="lg">
        ダッシュボード
      </Title>

      {/* 統計カード */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mb="xl">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} stat={stat} />
        ))}
      </SimpleGrid>

      {/* チャートセクション */}
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              売上推移
            </Title>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              達成率
            </Title>
            <Center>
              <RingProgress
                size={170}
                thickness={16}
                sections={[
                  { value: 75, color: 'cyan' },
                  { value: 15, color: 'orange' },
                  { value: 10, color: 'grape' },
                ]}
                label={
                  <Text size="xl" align="center" weight={700}>
                    75%
                  </Text>
                }
              />
            </Center>
            <Stack mt="md" gap="xs">
              <Group justify="space-between">
                <Group gap="xs">
                  <Box w={12} h={12} bg="cyan" style={{ borderRadius: 2 }} />
                  <Text size="sm">完了</Text>
                </Group>
                <Text size="sm" weight={500}>75%</Text>
              </Group>
              <Group justify="space-between">
                <Group gap="xs">
                  <Box w={12} h={12} bg="orange" style={{ borderRadius: 2 }} />
                  <Text size="sm">進行中</Text>
                </Group>
                <Text size="sm" weight={500}>15%</Text>
              </Group>
              <Group justify="space-between">
                <Group gap="xs">
                  <Box w={12} h={12} bg="grape" style={{ borderRadius: 2 }} />
                  <Text size="sm">保留</Text>
                </Group>
                <Text size="sm" weight={500}>10%</Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={12}>
          <Card withBorder p="md" radius="md">
            <Group justify="space-between" mb="md">
              <Title order={4}>最近のアクティビティ</Title>
              <Badge>更新</Badge>
            </Group>
            <Stack gap="sm">
              {[
                { user: '田中太郎', action: 'プロジェクトAを更新しました', time: '5分前', color: 'blue' },
                { user: '佐藤花子', action: '新しいタスクを作成しました', time: '15分前', color: 'green' },
                { user: '鈴木一郎', action: 'レポートを提出しました', time: '1時間前', color: 'violet' },
                { user: '高橋美咲', action: 'コメントを追加しました', time: '2時間前', color: 'orange' },
              ].map((activity, index) => (
                <Paper key={index} p="sm" withBorder>
                  <Group justify="space-between">
                    <Group>
                      <ThemeIcon color={activity.color} variant="light" radius="xl">
                        {activity.user.charAt(0)}
                      </ThemeIcon>
                      <Box>
                        <Text size="sm" weight={500}>
                          {activity.user}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {activity.action}
                        </Text>
                      </Box>
                    </Group>
                    <Text size="xs" c="dimmed">
                      {activity.time}
                    </Text>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}