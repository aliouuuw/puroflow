"use client";

import {
    Card,
    Grid,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    Title,
} from "@tremor/react";


export default function Dashboard() {
    return (
        <main className="py-4">
            <Title>Dashboard</Title>
            <Text>Project an Team stats will be shown here</Text>

            <TabGroup className="mt-6">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Detail</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                            <Card>
                                {/* Placeholder to set height */}
                                <div className="h-28" />
                            </Card>
                            <Card>
                                {/* Placeholder to set height */}
                                <div className="h-28" />
                            </Card>
                            <Card>
                                {/* Placeholder to set height */}
                                <div className="h-28" />
                            </Card>
                        </Grid>
                        <div className="mt-6">
                            <Card>
                                <div className="h-80" />
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-6">
                            <Card>
                                <div className="h-96" />
                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    );
}