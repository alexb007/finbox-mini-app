import React from 'react';
import { CardScroll, Group, Spinner } from '@vkontakte/vkui';
import { DashboardCard } from './modules';
import { FirebaseDatabaseNode } from "@react-firebase/database";

/**
 * The dashboard component.
 *
 * @constructor
 */
export default function Dashboard(): React.ReactElement {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('vk_user_id');

  function getTotal(values: any) {
    let summary = 0;

    Object.values(values).forEach((item: any) => {
      summary = Number(item.summary) + summary;
    });

    return summary;
  }

  return (
    <Group mode="plain">
      <CardScroll size="m">
        <FirebaseDatabaseNode path={`${userId}/borrowed`}>
          {(data) => {
            return data.isLoading ? (
              <Spinner size="medium" />
            ) : data.value ? (
              <DashboardCard
                title="Полученные займы"
                subtitle={`${data.value && getTotal(data.value)} ₽`}
              />
            ) : (
              <DashboardCard
                title="Полученные займы"
                subtitle="0 ₽"
              />
            )
          }}
        </FirebaseDatabaseNode>
        <FirebaseDatabaseNode path={`${userId}/lent`}>
          {(data) => {
            return data.isLoading ? (
              <Spinner size="medium" />
            ) : data.value ? (
              <DashboardCard
                title="Выданные займы"
                subtitle={`${data.value && getTotal(data.value)} ₽`}
              />
            ) : (
              <DashboardCard
                title="Выданные займы"
                subtitle="0 ₽"
              />
            )
          }}
        </FirebaseDatabaseNode>
      </CardScroll>
    </Group>
  )
}