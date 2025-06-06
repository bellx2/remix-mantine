import {
  Box,
  Title,
  Card,
  Table,
  Group,
  Text,
  TextInput,
  Badge,
  Avatar,
  ActionIcon,
  Button,
  Menu,
  rem,
  Pagination,
  Select,
} from '@mantine/core';
import {
  IconSearch,
  IconFilter,
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconMail,
  IconUserPlus,
  IconDownload,
} from '@tabler/icons-react';
import { useState } from 'react';

// サンプルユーザーデータ
const usersData = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    role: '管理者',
    status: 'アクティブ',
    joinDate: '2023-01-15',
    avatar: null,
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    role: 'エディター',
    status: 'アクティブ',
    joinDate: '2023-02-20',
    avatar: null,
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    role: '閲覧者',
    status: '休止中',
    joinDate: '2023-03-10',
    avatar: null,
  },
  {
    id: 4,
    name: '高橋美咲',
    email: 'takahashi@example.com',
    role: 'エディター',
    status: 'アクティブ',
    joinDate: '2023-04-05',
    avatar: null,
  },
  {
    id: 5,
    name: '伊藤健太',
    email: 'ito@example.com',
    role: '管理者',
    status: 'アクティブ',
    joinDate: '2023-05-12',
    avatar: null,
  },
];

export const meta = () => {
  return [
    { title: "ユーザー管理 | 管理画面" },
    { name: "description", content: "ユーザーの管理と権限設定" },
  ];
};

export default function DashboardUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const rows = usersData.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} radius="xl" color="blue">
            {user.name.charAt(0)}
          </Avatar>
          <Box>
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
            <Text size="xs" c="dimmed">
              {user.email}
            </Text>
          </Box>
        </Group>
      </Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={user.role === '管理者' ? 'red' : user.role === 'エディター' ? 'blue' : 'gray'}
        >
          {user.role}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge
          variant="dot"
          color={user.status === 'アクティブ' ? 'green' : 'gray'}
        >
          {user.status}
        </Badge>
      </Table.Td>
      <Table.Td>{user.joinDate}</Table.Td>
      <Table.Td>
        <Group gap="xs" justify="flex-end">
          <ActionIcon variant="subtle" color="blue">
            <IconMail size={16} />
          </ActionIcon>
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconEdit size={14} />}>
                編集
              </Menu.Item>
              <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
                削除
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
      <Group justify="space-between" mb="xl">
        <Title order={2}>ユーザー管理</Title>
        <Button leftSection={<IconUserPlus size={16} />}>
          新規ユーザー
        </Button>
      </Group>

      <Card withBorder p="md" radius="md">
        <Group justify="space-between" mb="md">
          <Group>
            <TextInput
              placeholder="ユーザーを検索..."
              leftSection={<IconSearch size={16} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: rem(300) }}
            />
            <Select
              placeholder="ロールで絞り込み"
              data={['すべて', '管理者', 'エディター', '閲覧者']}
              clearable
              leftSection={<IconFilter size={16} />}
            />
          </Group>
          <Button variant="subtle" leftSection={<IconDownload size={16} />}>
            エクスポート
          </Button>
        </Group>

        <Table verticalSpacing="sm" striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ユーザー</Table.Th>
              <Table.Th>ロール</Table.Th>
              <Table.Th>ステータス</Table.Th>
              <Table.Th>登録日</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        <Group justify="space-between" mt="xl">
          <Text size="sm" c="dimmed">
            全{usersData.length}件中 1-{Math.min(5, usersData.length)}件を表示
          </Text>
          <Pagination
            value={page}
            onChange={setPage}
            total={Math.ceil(usersData.length / 5)}
          />
        </Group>
      </Card>
    </Box>
  );
}