import {
  Box,
  Title,
  Grid,
  Card,
  Text,
  Group,
  Stack,
  Select,
  SegmentedControl,
  Paper,
  Badge,
} from '@mantine/core';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { MetaFunction } from '@remix-run/node';

// サンプルデータの型定義
interface LineData {
  month: string;
  desktop: number;
  mobile: number;
  tablet: number;
}

interface BarData {
  name: string;
  uv: number;
  pv: number;
}

interface PieData {
  name: string;
  value: number;
  color: string;
}

// サンプルデータ
const lineData: LineData[] = [
  { month: '1月', desktop: 4000, mobile: 2400, tablet: 1200 },
  { month: '2月', desktop: 3000, mobile: 1398, tablet: 1000 },
  { month: '3月', desktop: 2000, mobile: 9800, tablet: 1500 },
  { month: '4月', desktop: 2780, mobile: 3908, tablet: 1100 },
  { month: '5月', desktop: 1890, mobile: 4800, tablet: 1300 },
  { month: '6月', desktop: 2390, mobile: 3800, tablet: 1400 },
];

const barData: BarData[] = [
  { name: '月曜日', uv: 4000, pv: 2400 },
  { name: '火曜日', uv: 3000, pv: 1398 },
  { name: '水曜日', uv: 2000, pv: 9800 },
  { name: '木曜日', uv: 2780, pv: 3908 },
  { name: '金曜日', uv: 1890, pv: 4800 },
  { name: '土曜日', uv: 2390, pv: 3800 },
  { name: '日曜日', uv: 3490, pv: 4300 },
];

const pieData: PieData[] = [
  { name: 'Chrome', value: 68.14, color: '#4285f4' },
  { name: 'Safari', value: 19.82, color: '#0066ff' },
  { name: 'Firefox', value: 7.34, color: '#ff9500' },
  { name: 'Edge', value: 3.61, color: '#00a8e8' },
  { name: 'その他', value: 1.09, color: '#666666' },
];

export const meta: MetaFunction = () => {
  return [
    { title: "アナリティクス | 管理画面" },
    { name: "description", content: "サイトアナリティクスとトラフィック分析" },
  ];
};

export default function DashboardAnalytics(): JSX.Element {
  return (
    <Box>
      <Group justify="space-between" mb="xl">
        <Title order={2}>アナリティクス</Title>
        <Group>
          <Select
            defaultValue="30days"
            data={[
              { value: '7days', label: '過去7日間' },
              { value: '30days', label: '過去30日間' },
              { value: '90days', label: '過去90日間' },
              { value: 'year', label: '過去1年間' },
            ]}
          />
          <SegmentedControl
            data={['日別', '週別', '月別']}
            defaultValue="日別"
          />
        </Group>
      </Group>

      <Grid gutter="md">
        {/* トラフィック概要 */}
        <Grid.Col span={12}>
          <Card withBorder p="md" radius="md">
            <Group justify="space-between" mb="md">
              <Title order={4}>トラフィック概要</Title>
              <Badge variant="light">リアルタイム: 342人</Badge>
            </Group>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="desktop" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="mobile" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="tablet" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 曜日別トラフィック */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              曜日別トラフィック
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
                <Bar dataKey="pv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* ブラウザシェア */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              ブラウザシェア
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Stack gap="xs" mt="md">
              {pieData.map((item) => (
                <Group key={item.name} justify="space-between">
                  <Group gap="xs">
                    <Box w={12} h={12} bg={item.color} style={{ borderRadius: 2 }} />
                    <Text size="sm">{item.name}</Text>
                  </Group>
                  <Text size="sm" weight={500}>{item.value}%</Text>
                </Group>
              ))}
            </Stack>
          </Card>
        </Grid.Col>

        {/* 主要指標 */}
        <Grid.Col span={12}>
          <Card withBorder p="md" radius="md">
            <Title order={4} mb="md">
              主要指標
            </Title>
            <Grid>
              {[
                { label: '平均セッション時間', value: '3分24秒', change: '+12%' },
                { label: '直帰率', value: '32.5%', change: '-5%' },
                { label: 'ページ/セッション', value: '4.2', change: '+8%' },
                { label: 'コンバージョン率', value: '2.8%', change: '+15%' },
              ].map((metric) => (
                <Grid.Col key={metric.label} span={{ base: 6, md: 3 }}>
                  <Paper p="md" withBorder>
                    <Text size="xs" color="dimmed" weight={500}>
                      {metric.label}
                    </Text>
                    <Text size="xl" weight={700} mt="xs">
                      {metric.value}
                    </Text>
                    <Text
                      size="sm"
                      color={metric.change.startsWith('+') ? 'teal' : 'red'}
                      weight={500}
                      mt="xs"
                    >
                      {metric.change}
                    </Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}