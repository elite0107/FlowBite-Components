<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-4 md:col-span-2">
      <Alert
        type="success"
        title="Well done!"
        message="Aww yeah, you successfully read this alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
      />
    </div>
    <div class="col-start-1 col-span-4 md:col-start-3 md:col-span-2">
      <Alert
        type="danger"
        title="Oh snap!"
        message="Aww yeah, you successfully read this alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
      />
    </div>
    <div class="col-span-4 md:col-span-2">
      <Alert
        type="success"
        :icon="true"
        message="Successfully uploaded"
      />
    </div>
    <div class="col-start-1 col-span-4 md:col-start-3 md:col-span-2">
      <Alert
        type="danger"
        :icon="true"
        subtitle="Danger alert!"
        message="Change a few things up and try submitting again."
      />
    </div>
    <div class="col-span-4 md:col-span-2">
      <Alert
        type="info"
        :icon="true"
        subtitle="Important Note!"
        message="Successfully uploaded"
      />
    </div>
    <div class="col-start-1 col-span-4 md:col-start-3 md:col-span-2">
      <Alert
        type="dark"
        :icon="true"
        subtitle="Important Note!"
        message="Change a few things up and try submitting again."
      />
    </div>
  </div>
</template>

<script>
// import Original Flowbite Components
import Alert from '@/components/OriginComponents/Alert.vue';

export default {
  name: "AlertsPage",
  components: { Alert }
}
</script>