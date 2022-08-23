<template>

  <div id="page-top">

    <!-- 3코스 2구간 종점스탬프 모달창 -->

    <div class="portfolio-modal modal fade" id="ThreeTwoStamp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content col-md-4">
          <div class="close-modal" data-bs-dismiss="modal"><img src="@/assets/img/close-icon.svg" alt="Close modal"/>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="modal-body">
                  <!-- Project details-->
                  <h3 class="text-uppercase">3코스 2구간 종점 스탬프</h3>

                  <img src="@/assets/img/stamp/finalstamp/3_2_finalstamp.png"
                       alt="2구간 종점스탬프"
                       class="three_two">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
/*eslint-disable*/

export default {

  name: "ThreeTwoStampMD"
}
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .three_two {
    width: 500px;
    height: 250px;
  }
}

@media all and (max-width: 768px) {
  .three_two {
    width: 250px;
    height: 125px;
  }
}
</style>