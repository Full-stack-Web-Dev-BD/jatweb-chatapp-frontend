import React from "react";

const MainSidebar = () => {
  return (
    <aside className="main-sidebar">
      {/* sidebar*/}
      <section className="sidebar position-relative">
        <div className="multinav">
          <div className="multinav-scroll" style={{ height: "100%" }}>
            {/* sidebar menu*/}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/dashboard.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Dashboard</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="index.html">
                      <i className="ti-more" />
                      Dashboard 1
                    </a>
                  </li>
                  <li>
                    <a href="index2.html">
                      <i className="ti-more" />
                      Dashboard 2
                    </a>
                  </li>
                  <li>
                    <a href="index3.html">
                      <i className="ti-more" />
                      Dashboard 3
                    </a>
                  </li>
                  <li>
                    <a href="index4.html">
                      <i className="ti-more" />
                      Dashboard 4
                    </a>
                  </li>
                  <li>
                    <a href="index5.html">
                      <i className="ti-more" />
                      Dashboard 5
                    </a>
                  </li>
                  <li>
                    <a href="index6.html">
                      <i className="ti-more" />
                      Dashboard 6
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/apps.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Apps</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Apps
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="extra_calendar.html">
                          <i className="ti-more" />
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a href="contact_app.html">
                          <i className="ti-more" />
                          Contact List
                        </a>
                      </li>
                      <li>
                        <a href="extra_taskboard.html">
                          <i className="ti-more" />
                          Todo
                        </a>
                      </li>
                      <li>
                        <a href="mailbox.html">
                          <i className="ti-more" />
                          Mailbox
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Sample Pages
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="invoice.html">
                          <i className="ti-more" />
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a href="invoicelist.html">
                          <i className="ti-more" />
                          Invoice List
                        </a>
                      </li>
                      <li>
                        <a href="extra_app_ticket.html">
                          <i className="ti-more" />
                          Support Ticket
                        </a>
                      </li>
                      <li>
                        <a href="extra_profile.html">
                          <i className="ti-more" />
                          User Profile
                        </a>
                      </li>
                      <li>
                        <a href="contact_userlist_grid.html">
                          <i className="ti-more" />
                          Userlist Grid
                        </a>
                      </li>
                      <li>
                        <a href="contact_userlist.html">
                          <i className="ti-more" />
                          Userlist
                        </a>
                      </li>
                      <li>
                        <a href="sample_faq.html">
                          <i className="ti-more" />
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="sample_blank.html">
                          <i className="ti-more" />
                          Blank
                        </a>
                      </li>
                      <li>
                        <a href="sample_coming_soon.html">
                          <i className="ti-more" />
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="sample_custom_scroll.html">
                          <i className="ti-more" />
                          Custom Scrolls
                        </a>
                      </li>
                      <li>
                        <a href="sample_gallery.html">
                          <i className="ti-more" />
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a href="sample_lightbox.html">
                          <i className="ti-more" />
                          Lightbox Popup
                        </a>
                      </li>
                      <li>
                        <a href="sample_pricing.html">
                          <i className="ti-more" />
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/cards.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Widgets</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Custom
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="widgets_blog.html">
                          <i className="ti-more" />
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="widgets_chart.html">
                          <i className="ti-more" />
                          Chart
                        </a>
                      </li>
                      <li>
                        <a href="widgets_list.html">
                          <i className="ti-more" />
                          List
                        </a>
                      </li>
                      <li>
                        <a href="widgets_social.html">
                          <i className="ti-more" />
                          Social
                        </a>
                      </li>
                      <li>
                        <a href="widgets_statistic.html">
                          <i className="ti-more" />
                          Statistic
                        </a>
                      </li>
                      <li>
                        <a href="widgets_weather.html">
                          <i className="ti-more" />
                          Weather
                        </a>
                      </li>
                      <li>
                        <a href="widgets.html">
                          <i className="ti-more" />
                          Widgets
                        </a>
                      </li>
                      <li>
                        <a href="email_index.html">
                          <i className="ti-more" />
                          Emails
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Maps
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="map_google.html">
                          <i className="ti-more" />
                          Google Map
                        </a>
                      </li>
                      <li>
                        <a href="map_vector.html">
                          <i className="ti-more" />
                          Vector Map
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Modals
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="component_modals.html">
                          <i className="ti-more" />
                          Modals
                        </a>
                      </li>
                      <li>
                        <a href="component_sweatalert.html">
                          <i className="ti-more" />
                          Sweet Alert
                        </a>
                      </li>
                      <li>
                        <a href="component_notification.html">
                          <i className="ti-more" />
                          Toastr
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/authentication.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Authentication</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="auth_login.html">
                      <i className="ti-more" />
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="auth_register.html">
                      <i className="ti-more" />
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="auth_lockscreen.html">
                      <i className="ti-more" />
                      Lockscreen
                    </a>
                  </li>
                  <li>
                    <a href="auth_user_pass.html">
                      <i className="ti-more" />
                      Recover password
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/miscellaneous.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Miscellaneous</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="error_404.html">
                      <i className="ti-more" />
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a href="error_500.html">
                      <i className="ti-more" />
                      Error 500
                    </a>
                  </li>
                  <li>
                    <a href="error_maintenance.html">
                      <i className="ti-more" />
                      Maintenance
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/uielements.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Features</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Card
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="box_cards.html">
                          <i className="ti-more" />
                          User Card
                        </a>
                      </li>
                      <li>
                        <a href="box_advanced.html">
                          <i className="ti-more" />
                          Advanced Card
                        </a>
                      </li>
                      <li>
                        <a href="box_basic.html">
                          <i className="ti-more" />
                          Basic Card
                        </a>
                      </li>
                      <li>
                        <a href="box_color.html">
                          <i className="ti-more" />
                          Card Color
                        </a>
                      </li>
                      <li>
                        <a href="box_group.html">
                          <i className="ti-more" />
                          Card Group
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      BS UI
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="ui_grid.html">
                          <i className="ti-more" />
                          Grid System
                        </a>
                      </li>
                      <li>
                        <a href="ui_badges.html">
                          <i className="ti-more" />
                          Badges
                        </a>
                      </li>
                      <li>
                        <a href="ui_border_utilities.html">
                          <i className="ti-more" />
                          Border
                        </a>
                      </li>
                      <li>
                        <a href="ui_buttons.html">
                          <i className="ti-more" />
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a href="ui_color_utilities.html">
                          <i className="ti-more" />
                          Color
                        </a>
                      </li>
                      <li>
                        <a href="ui_dropdown.html">
                          <i className="ti-more" />
                          Dropdown
                        </a>
                      </li>
                      <li>
                        <a href="ui_dropdown_grid.html">
                          <i className="ti-more" />
                          Dropdown Grid
                        </a>
                      </li>
                      <li>
                        <a href="ui_progress_bars.html">
                          <i className="ti-more" />
                          Progress Bars
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Icons
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="icons_fontawesome.html">
                          <i className="ti-more" />
                          Font Awesome
                        </a>
                      </li>
                      <li>
                        <a href="icons_glyphicons.html">
                          <i className="ti-more" />
                          Glyphicons
                        </a>
                      </li>
                      <li>
                        <a href="icons_material.html">
                          <i className="ti-more" />
                          Material Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_themify.html">
                          <i className="ti-more" />
                          Themify Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_simpleline.html">
                          <i className="ti-more" />
                          Simple Line Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_cryptocoins.html">
                          <i className="ti-more" />
                          Cryptocoins Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_flag.html">
                          <i className="ti-more" />
                          Flag Icons
                        </a>
                      </li>
                      <li>
                        <a href="icons_weather.html">
                          <i className="ti-more" />
                          Weather Icons
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Custom UI
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="ui_ribbons.html">
                          <i className="ti-more" />
                          Ribbons
                        </a>
                      </li>
                      <li>
                        <a href="ui_sliders.html">
                          <i className="ti-more" />
                          Sliders
                        </a>
                      </li>
                      <li>
                        <a href="ui_typography.html">
                          <i className="ti-more" />
                          Typography
                        </a>
                      </li>
                      <li>
                        <a href="ui_tab.html">
                          <i className="ti-more" />
                          Tabs
                        </a>
                      </li>
                      <li>
                        <a href="ui_timeline.html">
                          <i className="ti-more" />
                          Timeline
                        </a>
                      </li>
                      <li>
                        <a href="ui_timeline_horizontal.html">
                          <i className="ti-more" />
                          Horizontal Timeline
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview">
                    <a href="#">
                      <i className="ti-more" />
                      Components
                      <span className="pull-right-container">
                        <i className="fa fa-angle-right pull-right" />
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a href="component_bootstrap_switch.html">
                          <i className="ti-more" />
                          Bootstrap Switch
                        </a>
                      </li>
                      <li>
                        <a href="component_date_paginator.html">
                          <i className="ti-more" />
                          Date Paginator
                        </a>
                      </li>
                      <li>
                        <a href="component_media_advanced.html">
                          <i className="ti-more" />
                          Advanced Medias
                        </a>
                      </li>
                      <li>
                        <a href="component_rangeslider.html">
                          <i className="ti-more" />
                          Range Slider
                        </a>
                      </li>
                      <li>
                        <a href="component_rating.html">
                          <i className="ti-more" />
                          Ratings
                        </a>
                      </li>
                      <li>
                        <a href="component_animations.html">
                          <i className="ti-more" />
                          Animations
                        </a>
                      </li>
                      <li>
                        <a href="extension_fullscreen.html">
                          <i className="ti-more" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a href="extension_pace.html">
                          <i className="ti-more" />
                          Pace
                        </a>
                      </li>
                      <li>
                        <a href="component_nestable.html">
                          <i className="ti-more" />
                          Nestable
                        </a>
                      </li>
                      <li>
                        <a href="component_portlet_draggable.html">
                          <i className="ti-more" />
                          Draggable Portlets
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/forms1.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Forms</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="forms_advanced.html">
                      <i className="ti-more" />
                      Form Elements
                    </a>
                  </li>
                  <li>
                    <a href="forms_general.html">
                      <i className="ti-more" />
                      Form Layout
                    </a>
                  </li>
                  <li>
                    <a href="forms_wizard.html">
                      <i className="ti-more" />
                      Form Wizard
                    </a>
                  </li>
                  <li>
                    <a href="forms_validation.html">
                      <i className="ti-more" />
                      Form Validation
                    </a>
                  </li>
                  <li>
                    <a href="forms_mask.html">
                      <i className="ti-more" />
                      Formatter
                    </a>
                  </li>
                  <li>
                    <a href="forms_xeditable.html">
                      <i className="ti-more" />
                      Xeditable Editor
                    </a>
                  </li>
                  <li>
                    <a href="forms_dropzone.html">
                      <i className="ti-more" />
                      Dropzone
                    </a>
                  </li>
                  <li>
                    <a href="forms_code_editor.html">
                      <i className="ti-more" />
                      Code Editor
                    </a>
                  </li>
                  <li>
                    <a href="forms_editors.html">
                      <i className="ti-more" />
                      Editor
                    </a>
                  </li>
                  <li>
                    <a href="forms_editor_markdown.html">
                      <i className="ti-more" />
                      Markdown
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/sidebar-menu/charts.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Charts</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="charts_chartjs.html">
                      <i className="ti-more" />
                      ChartJS
                    </a>
                  </li>
                  <li>
                    <a href="charts_flot.html">
                      <i className="ti-more" />
                      Flot
                    </a>
                  </li>
                  <li>
                    <a href="charts_inline.html">
                      <i className="ti-more" />
                      Inline charts
                    </a>
                  </li>
                  <li>
                    <a href="charts_morris.html">
                      <i className="ti-more" />
                      Morris
                    </a>
                  </li>
                  <li>
                    <a href="charts_peity.html">
                      <i className="ti-more" />
                      Peity
                    </a>
                  </li>
                  <li>
                    <a href="charts_chartist.html">
                      <i className="ti-more" />
                      Chartist
                    </a>
                  </li>
                  <li>
                    <a href="charts_c3_axis.html">
                      <i className="ti-more" />
                      Axis Chart
                    </a>
                  </li>
                  <li>
                    <a href="charts_c3_bar.html">
                      <i className="ti-more" />
                      Bar Chart
                    </a>
                  </li>
                  <li>
                    <a href="charts_c3_data.html">
                      <i className="ti-more" />
                      Data Chart
                    </a>
                  </li>
                  <li>
                    <a href="charts_c3_line.html">
                      <i className="ti-more" />
                      Line Chart
                    </a>
                  </li>
                  <li>
                    <a href="charts_echarts_basic.html">
                      <i className="ti-more" />
                      Basic Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts_echarts_bar.html">
                      <i className="ti-more" />
                      Bar Chart
                    </a>
                  </li>
                  <li>
                    <a href="charts_echarts_pie_doughnut.html">
                      <i className="ti-more" />
                      Pie &amp; Doughnut Chart
                    </a>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <a href="#">
                  <img
                    src="../images/svg-icon/tables.svg"
                    className="svg-icon"
                    alt
                  />
                  <span>Tables</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-right pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a href="tables_simple.html">
                      <i className="ti-more" />
                      Simple tables
                    </a>
                  </li>
                  <li>
                    <a href="tables_data.html">
                      <i className="ti-more" />
                      Data tables
                    </a>
                  </li>
                  <li>
                    <a href="tables_editable.html">
                      <i className="ti-more" />
                      Editable Tables
                    </a>
                  </li>
                  <li>
                    <a href="tables_color.html">
                      <i className="ti-more" />
                      Table Color
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="sidebar-widgets">
              <div className="copyright text-center m-25">
                <p>
                  <strong className="d-block">Chat-Bot Admin Dashboard</strong>©
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default MainSidebar;
