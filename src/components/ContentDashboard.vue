<template>
    <div>
        <div class="mb-8">
            <v-card class="pa-6" elevation="1" color="white">
                <p class="text-body-1 font-weight-bold">Statistic</p>
                <v-row>
                    <v-col cols="3" class="pl-6 pr-6">
                        <div class="d-flex align-center">
                            <p class="text-subtitle-2 mb-0 grey--text">Annual Leave</p>
                            <i class="mdi mdi-calendar ml-auto text-h5 green--text"></i>
                        </div>
                        <p class="text-h5 font-weight-bold mb-0">15 <span class="text-caption grey--text">/ 15</span></p>
                    </v-col>
                    <v-col cols="3" class="pl-6 pr-6">
                        <div class="d-flex align-center">
                            <p class="text-subtitle-2 mb-0 grey--text">Used Leave</p>
                            <i class="mdi mdi-calendar ml-auto text-h5 grey--text text--darken-3"></i>
                        </div>
                        <p class="text-h5 font-weight-bold mb-0">4 <span class="text-caption grey--text">/ 2023</span></p>
                    </v-col>
                    <v-col cols="3" class="pl-6 pr-6">
                        <div class="d-flex align-center">
                            <p class="text-subtitle-2 mb-0 grey--text">Sick</p>
                            <i class="mdi mdi-medication ml-auto text-h5 red--text"></i>
                        </div>
                        <p class="text-h5 font-weight-bold mb-0">1 <span class="text-caption grey--text">/ 2023</span></p>
                    </v-col>
                    <v-col cols="3" class="pl-6 pr-6">
                        <div class="d-flex align-center">
                            <p class="text-subtitle-2 mb-0 grey--text">Annual Income</p>
                            <i class="mdi mdi-wallet ml-auto text-h5 blue--text"></i>
                        </div>
                        <p class="text-h5 font-weight-bold mb-0">36.000 <span class="text-caption grey--text">K</span></p>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mb-6">
            <v-row>
                <v-col cols="6">
                    <v-card class="pa-6" elevation="1" color="white" height="100%">
                        <p class="text-body-1 font-weight-bold">Skill Sets</p>
                        <Radar
                            :options="chartOptions"
                            :data="chartData"
                            :chart-id="chartId"
                            :dataset-id-key="datasetIdKey"
                            :plugins="plugins"
                            :css-classes="cssClasses"
                            :styles="styles"
                            :width="width"
                            :height="height"
                        />
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class="pa-6" elevation="1" color="white" height="100%">
                        <p class="text-body-1 font-weight-bold">Performance</p>
                        <Bar
                            id="my-chart-id"
                            :options="optionsBar"
                            :data="dataBar"
                            :width="width"
                            :height="height"
                        />
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card class="pa-6" elevation="1" color="white" >
                        <p class="text-body-1 font-weight-bold">My Project</p>
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Project Name
                                    </th>
                                    <th class="text-left">
                                        As a Position
                                    </th>
                                    <th class="text-left">
                                        Join Date
                                    </th>
                                    <th class="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Project 1</td>
                                    <td>Backend Developer</td>
                                    <td>January, 1st 2019</td>
                                    <td class="text-center">
                                        <v-btn icon>
                                            <v-icon>mdi-dots-horizontal</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project 2</td>
                                    <td>Backend Developer</td>
                                    <td>January, 1st 2019</td>
                                    <td class="text-center">
                                        <v-btn icon>
                                            <v-icon>mdi-dots-horizontal</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project 3</td>
                                    <td>Backend Developer</td>
                                    <td>January, 1st 2019</td>
                                    <td class="text-center">
                                        <v-btn icon>
                                            <v-icon>mdi-dots-horizontal</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import { Radar, Bar } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale, BarElement, CategoryScale, LinearScale, Filler } from 'chart.js'

ChartJS.register( Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, BarElement, CategoryScale, LinearScale, Filler )

export default{
    name: 'ContentDashboard',
    components: {
        Radar,
        Bar
    },
    props: {
        chartId: {
        type: String,
        default: 'radar-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 10
        },
        height: {
        type: Number,
        default: 10
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Array,
        default: () => []
        }
    },
    data(){
        return{
            chartData: {
                labels: [
                'Programming',
                'Marketing',
                'Design',
                'Managerial',
                'Business',
                'Public Speaking'
                ],
                datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(69, 175, 91,0.1)',
                    borderColor: '#45af5b',
                    pointBackgroundColor: '#45af5b',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [80, 60, 70, 75, 70, 80]
                }
                ]
            },
            chartOptions: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        min: 0,
                        ticks:{
                            stepSize: 20,
                            maxTicksLimit: 6
                        },
                        font: {
                            size: 10
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },
            dataBar:{
                labels: [ '2020', '2021', '2022' ],
                datasets: [ 
                    {
                        data: [80, 75, 90],
                        backgroundColor: 'rgba(69, 175, 91, 0.3)'
                    },

                ]
            },
            optionsBar:{
                responsive: true,
                scales: {
                    y:{
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            maxTicksLimit: 6
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        }
    }
}
</script>