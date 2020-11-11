<template>
    <article>
        <h2 class="text-center">Ближайшие события</h2>
        <p class="text-center">We regularly host different kinds of events to satisfy the desires and demands even 
            of all our clients... some text</p>
        <ul class="list-group">
            <li class="list-group-item d-flex" v-for="item in events" v-bind:key="item.id">
                <div class="date d-flex flex-column">
                    <span class="number text-center">{{item.date.getDate()}}</span>
                    <span class="month text-center">{{item.date.getMonth()}}</span>
                </div>
                <div class="event-title d-flex flex-column justify-content-center">
                    <h3 class="title">{{item.title}}</h3>
                    <div class="subtitle">{{item.subtitle}}</div>
                </div>
                <div class="address">
                    <div><b>{{item.city}}</b>, {{item.address}}</div>
                    <div>{{item.time}}</div>
                </div>
                <div class="link">
                    <button type="button" class="btn btn-primary">Learn more</button>
                </div>
            </li>
        </ul>
        <p class="mt-3 text-center">
            <button type="button" class="btn btn-primary">Показать все события</button>
        </p>
    </article>
</template>

<script>
export default {
    data() {
        return {
            events: [
                {
                    id: 1,
                    date: new Date(),
                    title: 'Event title',
                    subtitle: 'Subtitle',
                    city: 'Moscow',
                    address: 'Lomonosova 8',
                    time: '10:00 - 12:00'
                },
                {
                    id: 2,
                    date: new Date(),
                    title: 'Event title',
                    subtitle: 'Subtitle',
                    city: 'Moscow',
                    address: 'Lomonosova 8',
                    time: '10:00 - 12:00'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '~/sass/theme.scss';
.list-group-item {
    .date {
        flex-grow: 1;
        .number {
            font-size: $font-size-base * 3;
            line-height: $font-size-base * 2.7;
        }
    }
    .event-title {
        flex-grow: 5;
    }
    .address {
        flex-grow: 1;
    }
}
</style>